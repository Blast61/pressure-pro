import { NextResponse } from "next/server";
import { SEED_CONFERENCES } from "@/data/conferences.seed";

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const conference = SEED_CONFERENCES.find(c => c.id === id);
    if(!conference){
        return NextResponse.json({ error: "Not found" }, { status: 404})
    }
    return NextResponse.json({ data: conference });
}

