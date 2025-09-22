import { NextResponse } from "next/server";
import { db } from "@/lib/server/db";
import { computeStatus } from "@/lib/utils/status";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
){
    const { id } = await params;

    //Parse JSON
    let raw: unknown;
    try{
        raw = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }
    if(!raw || typeof raw !== "object"){
        return NextResponse.json({ error: "Payload must be an object."}, { status: 400 });
    }

    //Validate payload
    const { name, email } = raw as { name?: string; email?: string };

    const validName =
    typeof name === "string" && name.trim().length >= 2;

    const validEmail =
    typeof email === "string" &&
    /[^@\s]+@[^@\s]+\.[^@\s]+/i.test(email.trim());; // contains @ and ends with .com or .edu

    if (!validName || !validEmail) {
    return NextResponse.json(
        { error: "Please enter a valid name email address." },
        { status: 400 }
    );
    }

    
    const conference = db.get(id); 
    if(!conference){
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    
    const status = computeStatus(conference.endDate ?? conference.date, conference.currentAttendees, conference.maxAttendees, Date.now());
    if(status !== "Open"){
        return NextResponse.json({ error: "Registration closed" }, { status: 400})
    }
    
    return NextResponse.json({ ok: true, conferenceId: id }, { status: 201 });
}
