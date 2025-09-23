import ConferenceCard from "@/components/conf/ConferenceCard";
import SearchPanel from "@/components/conf/SearchPanel";
import Link from "next/link";
import { headers, cookies } from "next/headers";
import type { Conference } from "@/lib/types";

type SearchParamMap = Record<string, string | string[] | undefined>;

type ConferencesListResponse = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  items: Conference[];
};

export const dynamic = "force-dynamic";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParamMap>;
}) {
  const resolvedParams = await searchParams;

  // Parse query params
  const queryText =
    typeof resolvedParams.q === "string" ? resolvedParams.q : "";

  const selectedCategories: string[] =
    typeof resolvedParams.category === "string"
      ? resolvedParams.category
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean)
      : Array.isArray(resolvedParams.category)
      ? resolvedParams.category
          .map((name) => (typeof name === "string" ? name.trim() : ""))
          .filter(Boolean)
      : [];

  const startDateParam =
    typeof resolvedParams.start === "string" ? resolvedParams.start : "";
  const endDateParam =
    typeof resolvedParams.end === "string" ? resolvedParams.end : "";

  const minPriceParam =
    typeof resolvedParams.minPrice === "string"
      ? Number(resolvedParams.minPrice)
      : null;

  const maxPriceParam =
    typeof resolvedParams.maxPrice === "string"
      ? Number(resolvedParams.maxPrice)
      : null;

  const pageParam =
    typeof resolvedParams.page === "string"
      ? Number(resolvedParams.page)
      : 1;
  const cookieStore = await cookies();
  const cookiePageSize = Number(cookieStore.get("pref_page_size")?.value ?? "");
  
  const pageSizeParamRaw =
    typeof resolvedParams.pageSize === "string"
      ? Number(resolvedParams.pageSize)
      : (!Number.isNaN(cookiePageSize) && cookiePageSize > 0 ? cookiePageSize : 6);

  const pageSize = Math.min(
    24,
    Math.max(1, Number.isNaN(pageSizeParamRaw) ? 6 : pageSizeParamRaw),
  );
  const requestedPage = Math.max(1, Number.isNaN(pageParam) ? 1 : pageParam);

  // Build query string for the API
  const qs = new URLSearchParams();
  if (queryText) qs.set("q", queryText);
  if (selectedCategories.length) {
    // Repeated keys are supported by the API
    selectedCategories.forEach((cat) => qs.append("category", cat));
  }
  if (startDateParam) qs.set("start", startDateParam);
  if (endDateParam) qs.set("end", endDateParam);
  if (minPriceParam !== null && !Number.isNaN(minPriceParam)) {
    qs.set("minPrice", String(minPriceParam));
  }
  if (maxPriceParam !== null && !Number.isNaN(maxPriceParam)) {
    qs.set("maxPrice", String(maxPriceParam));
  }
  qs.set("page", String(requestedPage));
  qs.set("pageSize", String(pageSize));

  // Build origin robustly for server-side fetch
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const origin = `${proto}://${host}`;

  // Fetch paginated/filtered list (no-store to avoid stale in-memory copies)
  const listRes = await fetch(`${origin}/api/conferences?${qs.toString()}`, {
    cache: "no-store",
  });
  const listJson = (await listRes.json()) as ConferencesListResponse;

  const visibleConferences: Conference[] = listJson.items;
  const totalItems: number = listJson.total;
  const totalPages: number = listJson.totalPages;
  const currentPage: number = listJson.page;
  const sliceStartIdx = (currentPage - 1) * pageSize;

  // Fetch all items (big pageSize) to derive the categories for the filter UI
  const allRes = await fetch(`${origin}/api/conferences?page=1&pageSize=1000`, {
    cache: "no-store",
  });
  const allJson = (await allRes.json()) as ConferencesListResponse;
  const allCategoriesForUi: string[] = Array.from(
    new Set(allJson.items.flatMap((c) => c.category)),
  ).sort();

  // Build prev/next hrefs while preserving filters
  const baseParams = new URLSearchParams();
  if (queryText) baseParams.set("q", queryText);
  if (selectedCategories.length) {
    baseParams.set("category", selectedCategories.join(","));
  }
  if (startDateParam) baseParams.set("start", startDateParam);
  if (endDateParam) baseParams.set("end", endDateParam);
  if (minPriceParam !== null && !Number.isNaN(minPriceParam)) {
    baseParams.set("minPrice", String(minPriceParam));
  }
  if (maxPriceParam !== null && !Number.isNaN(maxPriceParam)) {
    baseParams.set("maxPrice", String(maxPriceParam));
  }
  // Always include pageSize so pagination persists
  baseParams.set("pageSize", String(pageSize));

  const prevHref =
    currentPage > 1
      ? `/?${new URLSearchParams(baseParams).toString()}&page=${
          currentPage - 1
        }`
      : null;

  const nextHref =
    currentPage < totalPages
      ? `/?${new URLSearchParams(baseParams).toString()}&page=${
          currentPage + 1
        }`
      : null;

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <h1 className="mt-6 text-center text-6xl font-semibold md:text-5xl">Tech Conference Explorer</h1>

      <SearchPanel
        allCategories={allCategoriesForUi}
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

      <p className="text-center text-sm text-neutral-600">
        Showing{" "}
        {totalItems === 0
          ? 0
          : sliceStartIdx + 1}
        -
        {Math.min(sliceStartIdx + pageSize, totalItems)} of {totalItems}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleConferences.length > 0 ? (
          visibleConferences.map((conference) => (
            <ConferenceCard key={conference.id} {...conference} />
          ))
        ) : (
          <div className="rounded border p-6 text-neutral-600">
            No conferences match your filters.
          </div>
        )}
      </div>

      {/* Pagination */}
      <nav className="flex items-center justify-between py-6" aria-label="Pagination">
        {prevHref ? (
          <Link href={prevHref} className="rounded border px-3 py-2">
            ← Prev
          </Link>
        ) : (
          <span className="rounded border px-3 py-2 opacity-50" aria-disabled="true">
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
          <span className="rounded border px-3 py-2 opacity-50" aria-disabled="true">
            Next →
          </span>
        )}
      </nav>
    </div>
  );
}
