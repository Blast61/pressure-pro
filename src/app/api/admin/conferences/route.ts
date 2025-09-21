import { NextResponse } from "next/server";
import { db } from "@/lib/server/db";
import type { Conference, Speaker } from "@/lib/types";

/** Shallow validation for required core fields */
function validatConferenceInput(input: Partial<Conference>){
    const issues: string[] = [];
    if(!input.id || !/^[a-z0-9-]+$/i.test(input.id)) {
        issues.push('Field "id" is required and must be slug-like (letters, numbers, dashes).');
    }
    if(!input.name) {
        issues.push('Field "name" is required.');
    }
    if(!input.date){
        issues.push('Field "date" is required.');
    } else {
        const startMs = new Date(input.date).getTime();
        if(Number.isNaN(startMs)) {
            issues.push('Field "date" must be a valid ISO date string.');
        }
    }
    if(!input.location) {
        issues.push('Field "location" is required.');
    }
    if(typeof input.price !== "number" || input.price < 0) {
        issues.push('Field "price" must be a non-negative number.');
    }
    if(!Array.isArray(input.category) || !input.category.every(item => typeof item === "string" && item.trim().length > 0)) {
        issues.push('Field "category" must be a non-empty array of strings.');
    }
    if(typeof input.maxAttendees !== "number" || input.maxAttendees <= 0){
        issues.push('Field "maxAttendees" must be a positive number.');
    }
    if(typeof input.currentAttendees !== "number" || input.currentAttendees < 0){
        issues.push('Field "currentAttendees" must be a non-negative number.');
    }
    if(input.endDate) {
        const startMs = new Date(input.date!).getTime();
        const endMs = new Date(input.endDate).getTime();
        if(Number.isNaN(endMs)) {
            issues.push('Field "endDate" must be a valid ISO date string.');
        }
        if(!Number.isNaN(startMs) && !Number.isNaN(endMs) && endMs < startMs) {
            issues.push("endDate must be the same as or after date.");
        }
    }
    if(
        typeof input.maxAttendees === "number" && typeof input.currentAttendees === "number" && input.currentAttendees > input.maxAttendees
    ) {
        issues.push("currentAttendees cannot exceed maxAttendees.");
    }

    //Shallow speaker validation if provided
    if(input.speakers !== undefined) {
        if(!Array.isArray(input.speakers) || !input.speakers.every(s => 
            s && typeof s === "object" &&
            typeof(s as Speaker).id === "string" &&
            typeof(s as Speaker).name === "string" &&
            typeof(s as Speaker).title === "string" &&
            typeof(s as Speaker).company === "string" && 
            typeof(s as Speaker).bio === "string"
        )){
            issues.push('Field "speakers" must be an array of speaker objects.');
        } 
    }
    return issues;
}

export async function GET() {
    return NextResponse.json({ items: db.list() });
}

export async function POST(request: Request){
    try{
        const raw: unknown = await request.json();
        if(typeof raw !== "object" || raw === null){
            return NextResponse.json({ error: "Payload must be an object."}, { status: 400});
        }

        const payload = raw as Partial<Conference>;
        const issues = validatConferenceInput(payload);
        if(issues.length){
            return NextResponse.json({ error: issues.join(" ")}, { status: 400 });
        }

        //Fill defaults for optional fields
        const record: Conference = {
            id: payload.id!,
            name: payload.name!,
            description: payload.description ?? "",
            date: payload.date!,
            endDate: payload.endDate,
            location: payload.location!,
            price: payload.price ?? 0,
            category: payload.category ?? [],
            imageUrl: payload.imageUrl,
            speakers: payload.speakers  ?? [],
            maxAttendees: payload.maxAttendees ?? 100,
            currentAttendees: payload.currentAttendees ?? 0,
            isFeatured: Boolean(payload.isFeatured),
        };
        const created = db.create(record);
        return NextResponse.json(created, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Invalid JSON payload."}, { status: 400 });
    }
}