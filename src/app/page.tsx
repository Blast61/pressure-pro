import ConferenceCard from "@/components/conf/ConferenceCard";
import FiltersClient from "@/components/conf/FiltersClient";
import { SEED_CONFERENCES } from "@/data/conferences.seed";
import Link from "next/link";

type SearchParamMap = Record<string, string | string[] | undefined>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParamMap>;
}){
  const resolvedParams = await searchParams;

  // Parse query params 
  const queryText = typeof resolvedParams.q === "string" ? resolvedParams.q : "";

  const selectedCategories: string[] = typeof resolvedParams.category === "string" 
  ? resolvedParams.category.split(",").map((v) => v.trim()).filter(Boolean)
  : Array.isArray(resolvedParams.category)
  ? resolvedParams.category
  : [];

  const startDateParam = typeof resolvedParams.start === "string" ? resolvedParams.start : "";
  const endDateParam = typeof resolvedParams.end === "string" ? resolvedParams.end : "";

  const minPriceParam = typeof resolvedParams.minPrice === "string"
    ? Number(resolvedParams.minPrice)
    : null;

  const maxPriceParam = typeof resolvedParams.maxPrice === "string"
    ? Number(resolvedParams.maxPrice)
    : null;
  
    const pageParam = Number(typeof resolvedParams.page === "string" ? resolvedParams.page : 1);
    const pageSizeParam = Number(typeof resolvedParams.pageSize === "string" ? resolvedParams.pageSize : 6);

    const pageSize = Math.min(24, Math.max(1, pageSizeParam));
    const requestedPage = Math.max(1, pageParam);

    // Derive all categories for filter UI
    const allCategories = Array.from(
      new Set(SEED_CONFERENCES.flatMap((conf) => conf.category))
    ).sort();

    // Helpers for date parsing and overlap
    const toTimestamp = (value?: string): number | null => {
      if(!value) return null;
      const isoLike = /^\d{4}-\d{2}-\d{2}$/.test(value)
        ? `${value}T00:00:00.000Z`
        : value;
      
        const ts = new Date(isoLike).getTime();
        return Number.isNaN(ts) ? null : ts;
    }

    const rangeStartMs = startDateParam ? toTimestamp(startDateParam) : null;
    const rangeEndMs = endDateParam ? toTimestamp(endDateParam) : null;

    // Filter 
    const filteredConferences = SEED_CONFERENCES.filter((conf) => {
      //name
      if(queryText && !conf.name.toLowerCase().includes(queryText.toLowerCase())
      ) {
          return false;
      }
      
      //Categories
      if(selectedCategories.length > 0 && !conf.category.some((tag) => selectedCategories.includes(tag))
      ) {
          return false;
      }

      //Price
      if(minPriceParam !== null && !Number.isNaN(minPriceParam) && minPriceParam > 0 && conf.price < minPriceParam) {
        return false;
      }
      if(maxPriceParam !== null && !Number.isNaN(maxPriceParam) && maxPriceParam >= 0 && conf.price > maxPriceParam) {
        return false;
      }

      //Date overlap
      if(rangeStartMs !== null || rangeEndMs !== null) {
        const confStart = new Date(conf.date).getTime();
        const confEnd = new Date(conf.endDate ?? conf.date).getTime();
        const userStart = rangeStartMs ?? -Infinity;
        const userEnd = rangeEndMs ?? Infinity;
        const overlaps = confStart <= userEnd && confEnd >= userStart;
        if(!overlaps){
          return false;
        }
      }
      return true;
    });

    //Pagination
    const totalItems = filteredConferences.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const currentPage = Math.min(requestedPage, totalPages);
    const sliceStartIdx = (currentPage - 1) * pageSize;
    const visibleConferences = filteredConferences.slice(sliceStartIdx, sliceStartIdx + pageSize);


    // Build prev/next hrefs while preserving filters
    const baseParams = new URLSearchParams();
    if(queryText){
      baseParams.set("q", queryText);
    }
    if(selectedCategories.length){
      baseParams.set("category", selectedCategories.join(","));
    }
    if(startDateParam){
      baseParams.set("start", startDateParam);
    }
    if(endDateParam){
      baseParams.set("end", endDateParam);
    }
    if(minPriceParam !== null && !Number.isNaN(minPriceParam)){
      baseParams.set("minPrice", String(minPriceParam));
    }
    if(maxPriceParam !== null && !Number.isNaN(maxPriceParam)){
      baseParams.set("maxPrice", String(maxPriceParam));
    } else {
      baseParams.set("pageSize", String(pageSize));
    }

    const prevHref = currentPage > 1 
      ? `/?${new URLSearchParams(baseParams).toString()}&page=${currentPage - 1}`
      : null;
    
    const nextHref = currentPage < totalPages 
      ? `/?${new URLSearchParams(baseParams).toString()}&page=${currentPage + 1}`
      : null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Tech Conference Explorer
      </h1>

      <FiltersClient
        allCategories={allCategories}
        initial={{
          queryText,
          selectedCategories,
          startDate: startDateParam,
          endDate: endDateParam,
          minPrice: minPriceParam,
          maxPrice: maxPriceParam,
          pageSize,
        }}
      />

      <p className="text-sm text-neutral-600">
        Showing{" "}
        {totalItems === 0 ? 0 : sliceStartIdx + 1}-{Math.min(sliceStartIdx + pageSizeParam, totalItems)} of {totalItems}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleConferences.length > 0 ? (visibleConferences.map((conf) => (
          <ConferenceCard key={conf.id} {...conf} />
        ))
      ) : (
        <div className="rounded border p-6 text-neutral-600">
          No conferences match your filters.
        </div>
      )}
      </div>

      {/* Pagination */}
      <nav
        className="flex items-center justify-between"
        aria-label="Pagination"
      >
        {prevHref ? (
          <Link href={prevHref} className="rounded border px-3 py-2">
            ← Prev
          </Link>
        ) : (
          <span
          className="rounded border px-3 py-2 opacity-50"
          aria-disabled="true"
          >
            ← Prev
          </span>
        )}

        <span className="text-sm text-neutral-600">
          Page {currentPage} / {totalPages}
        </span>

        {nextHref ? (
          <Link href={nextHref} className="rounded border px-3 py-2">
            Next →
          </Link>
        ) : (
          <span 
          className="rounded border px-3 py-2 opacity-50"
          aria-disabled="true"
          >
            Next →
          </span>
        )}
      </nav>
    </div>
  );
}