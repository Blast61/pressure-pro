import { NextResponse } from "next/server";
import { SEED_CONFERENCES } from "@/data/conferences.seed";

type ConferenceListQuery = {
    queryText?: string;
    categories: string[];
    startDateMs: number | null;
    endDateMs: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    page: number;
    pageSize: number;
};

/**
 * Parse a date-like URL parameter into a UTC timestamp in ms.
 * 
 * @param dateParam - Full ISO string or plain yyyy-mm-dd (treated as UTC midnight).
 * @returns - Null if the value cannot be parsed.
 */
function parseDateParamToMs(dateParam?: string): number | null {
    if(!dateParam){
        return null;
    }
    const isoLike = /^\d{4}-\d{2}-\d{2}$/.test(dateParam) 
        ? `${dateParam}T00:00:00.000Z`
        : dateParam;
    const ts = new Date(isoLike).getTime();
    return Number.isNaN(ts) ? null : ts;
}

/**
 * Normalize "category" query params to a flat string array.
 * Supports repeated keys and/or comma-separated vals.
 * @param searchParams 
 * @returns 
 */
function parseCategoryParams(searchParams: URLSearchParams): string[]{
    const raw = searchParams.getAll("category");
    return raw.flatMap((s) => s.split(",")).map((s) => s.trim()).filter(Boolean);
}

function parseListQuery(searchParams: URLSearchParams): ConferenceListQuery {
    const queryText = searchParams.get("q") ?? undefined;
    const categories = parseCategoryParams(searchParams);

    const startDateMs = parseDateParamToMs(searchParams.get("start") ?? undefined);
    const endDateMs = parseDateParamToMs(searchParams.get("end") ?? undefined);

    const minPriceVal = Number.parseFloat(searchParams.get("minPrice") ?? "");
    const maxPriceVal = Number.parseFloat(searchParams.get("maxPrice") ?? "");

    const page = Math.max(1, Number.parseInt(searchParams.get("page") ?? "1", 10));
    const pageSize = Math.min(24, Math.max(1, Number.parseInt(searchParams.get("pageSize") ?? "6", 10)));

    return {
        queryText,
        categories,
        startDateMs,
        endDateMs,
        minPrice: Number.isNaN(minPriceVal) ? null : minPriceVal,
        maxPrice: Number.isNaN(maxPriceVal) ? null : maxPriceVal,
        page, 
        pageSize,
    };
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = parseListQuery(searchParams);
    
    //Filter
    const filtered = SEED_CONFERENCES.filter((conf) => {
        //name search
        if(query.queryText && !conf.name.toLowerCase().includes(query.queryText.toLowerCase())){
            return false;
        }
        //categories (require intersection if provided)
        if(query.categories.length && !conf.category.some((tag) => query.categories.includes(tag))){
            return false;
        }
        //price 
        if(query.minPrice !== null && query.minPrice > 0 && conf.price < query.minPrice){
            return false;
        }
        if(query.maxPrice !== null && query.maxPrice >= 0 && conf.price > query.maxPrice){
            return false;
        }

        //date range (overlap if both given)
        if(query.startDateMs !== null || query.endDateMs !== null) {
            const startMs = new Date(conf.date).getTime();
            const endMs = new Date(conf.endDate ?? conf.date).getTime();
            const rangeStart = query.startDateMs ?? -Infinity
            const rangeEnd = query.endDateMs ?? Infinity;
            const overlaps = startMs <= rangeEnd && endMs >= rangeStart;

            if(!overlaps){
                return false;
            }
        }
        return true;
    })

    //Pagination
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / query.pageSize));
    const currentPage = Math.min(query.page, totalPages);
    const startIdx = (currentPage - 1) * query.pageSize;
    const items = filtered.slice(startIdx, startIdx + query.pageSize);

    return NextResponse.json({
        page: currentPage,
        pageSize: query.pageSize,
        total,
        totalPages,
        items,
    });
}