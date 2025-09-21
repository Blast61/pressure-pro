import { NextResponse } from "next/server";
import { SEED_CONFERENCES } from "@/data/conferences.seed";
import { computeStatus } from "@/lib/utils/status";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
){
    const { id } = await params;
    const { name, email } = await req.json().catch(() => ({}));
    
    if(!name || typeof name !== "string" || name.trim().length < 2){
        return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if(!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return NextResponse.json({ error: "Invalid email"}, { status: 400 });
    }

    const conference = SEED_CONFERENCES.find((c) => c.id === id);
    if(!conference){
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const status = computeStatus(conference.endDate ?? conference.date, conference.currentAttendees, conference.maxAttendees, Date.now());
    if(status !== "Open"){
        return NextResponse.json({ error: "Registration closed" }, { status: 400})
    }
    
    return NextResponse.json({ ok: true, id: id }, { status: 201});
}
