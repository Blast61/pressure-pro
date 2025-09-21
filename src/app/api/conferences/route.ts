import { NextResponse } from "next/server";
import { SEED_CONFERENCES } from "@/data/conferences.seed";

export async function GET() {
    return NextResponse.json({ data: SEED_CONFERENCES })
}