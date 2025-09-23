"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FiltersClient from "./FiltersClient";

type SearchPanelProps = {
  allCategories: string[];
  initial: {
    queryText?: string;
    selectedCategories: string[];
    startDate?: string;
    endDate?: string;
    minPrice?: number | null;
    maxPrice?: number | null;
    pageSize: number;
  };
};

export default function SearchPanel({ allCategories, initial }: SearchPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [queryValue, setQueryValue] = useState<string>(initial.queryText ?? "");
  const [showAdvanced, setShowAdvanced] = useState(false);

  function runQuickSearch() {
    const next = new URLSearchParams(searchParams?.toString());
    // keep existing filters but overwrite q + page
    if (queryValue.trim()) next.set("q", queryValue.trim());
    else next.delete("q");
    next.set("page", "1");
    next.set("pageSize", String(initial.pageSize));
    router.push(`/?${next.toString()}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      runQuickSearch();
    }
  }

  return (
    <section className="space-y-4">
      {/* Giant, Google-ish search bar */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        <input
          aria-label="Search conferences"
          className="w-full rounded-full border px-5 py-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Search conferences…"
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={runQuickSearch}
            className="rounded-full bg-black px-5 py-2 text-white hover:shadow"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => setShowAdvanced((s) => !s)}
            className="rounded-full border px-4 py-2 hover:shadow"
            aria-expanded={showAdvanced}
            aria-controls="advanced-filters"
          >
            {showAdvanced ? "Hide Advanced" : "Advanced Search"}
          </button>
        </div>
      </div>

      {/* Advanced Filters (reuse existing component, hide its own query box) */}
      {showAdvanced && (
        <div id="advanced-filters">
          <FiltersClient allCategories={allCategories} initial={initial} hideQuery />
        </div>
      )}
    </section>
  );
}
