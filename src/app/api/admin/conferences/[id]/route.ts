import { NextResponse } from "next/server";
import { db } from "@/lib/server/db";
import type { Conference, Speaker } from "@/lib/types";

function validatePartialForUpdate(partial: Partial<Conference>){
    const issues: string[] = [];
    if(partial.id !== undefined) {
        issues.push('Field "id" cannot be updated.');
    }
    if(partial.price !== undefined && (typeof partial.price !== "number" || partial.price < 0)) {
        issues.push('Field "price" must be a non-negative number.');
    }
    if(partial.maxAttendees !== undefined && (typeof partial.maxAttendees !== "number" || partial.maxAttendees <= 0)) {
        issues.push('Field "maxAttendees" must be a positive number.');
    }
    if(partial.currentAttendees !== undefined &&(typeof partial.currentAttendees !== "number" || partial.currentAttendees < 0)) {
        issues.push('Field "currentAttendees" must be a non-negative number.');
    }
    if(partial.date !== undefined){
        const startMs = new Date(partial.date).getTime();
        if(Number.isNaN(startMs)) {
            issues.push('Field "date" must be a valid ISO date string.');
        }
    }
    if(partial.endDate !== undefined) {
        const endMs = new Date(partial.endDate).getTime();
        if(Number.isNaN(endMs)){
            issues.push('Field "endDate" must be a valid ISO date string.');
        }
    }
    if(partial.date !== undefined && partial.endDate !== undefined) {
        const startMs = new Date(partial.date).getTime();
        const endMs = new Date(partial.endDate).getTime();
        if(!Number.isNaN(startMs) && !Number.isNaN(endMs) && endMs < startMs) {
            issues.push("endDate must be the same as or after date.");
        }
    } 
    //Optional field type checks when provided
    if(partial.category !== undefined){
        if(!Array.isArray(partial.category) || !partial.category.every((tag) => typeof tag === "string")){
            issues.push('Field "category" must be an array of strings.');
        }
    }
    if(partial.imageUrl !== undefined && typeof partial.imageUrl !== "string") {
        issues.push('Field "imageUrl" must be a string.');
    }
    if(partial.isFeatured !== undefined && typeof partial.isFeatured !== "boolean"){
        issues.push('Field "isFeatured" must be a boolean.');
    }
    if(partial.speakers !== undefined) {
        if(!Array.isArray(partial.speakers) || !partial.speakers.every((speaker) =>
            speaker &&
            typeof speaker === "object" &&
            typeof(speaker as Speaker).id === "string" &&
            typeof(speaker as Speaker).name === "string" &&
            typeof(speaker as Speaker).title === "string" &&
            typeof(speaker as Speaker).company === "string" &&
            typeof(speaker as Speaker).bio === "string"
            && ((speaker as Speaker).avatarUrl === undefined || typeof(speaker as Speaker).avatarUrl === "string")
            )
        ) {
            issues.push('Field "speakers" must be an array of speaker objects.');
        }
    }  
    return issues;
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
){
    const { id } = await params;
    const record = db.get(id);
    if(!record) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(record);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    
    //Parse JSON first
    let raw: unknown;
    try{
        raw = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON payload."}, { status: 400 });
    }

    if(typeof raw !== "object" || raw === null) {
        return NextResponse.json({ error: "Payload must be an object." }, { status: 400 });
    }

    const partial = raw as Partial<Conference>;
    const issues = validatePartialForUpdate(partial);
    if(issues.length){
        return NextResponse.json({ error: issues.join(" ")}, { status: 400 });
    }

    //Ensure record exists (clearer 404 than a thrown error inside db.update)
    const existing = db.get(id);
    if(!existing) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const allowed: (keyof Conference)[] = [
        "name", "description", "date", "endDate", "location", "price", "category", "imageUrl", "speakers", "maxAttendees", "currentAttendees", "isFeatured"
    ];
    const safePartial = Object.fromEntries(
        Object.entries(partial).filter(([key]) => allowed.includes(key as keyof Conference))
    ) as Partial<Conference>;
    const updated = db.update(id, safePartial);
    return NextResponse.json(updated);
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
){
    const { id } = await params;
    const existing = db.get(id);
    if(!existing){
        return NextResponse.json({ error: "Not found"}, { status: 404 });
    }
    db.delete(id);
    return new NextResponse(null, { status: 204 });
}

