"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type FiltersClientProps = {
    allCategories: string[];
    initial: {
        queryText?: string;
        selectedCategories: string[];
        startDate?: string; //yyyy-mm-dd
        endDate?: string; //yyyy-mm-dd
        minPrice?: number | null;
        maxPrice?: number | null;
        pageSize: number;
    };
};

export default function FiltersClient({
    allCategories,
    initial,
}: FiltersClientProps){
    const router = useRouter();
    const currentSearchParams = useSearchParams();

    //Local UI state (readable names)
    const [inputQueryText, setInputQueryText] = useState(initial.queryText ?? "");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(initial.selectedCategories);
    const [inputStartDate, setInputStartDate] = useState(initial.startDate ?? "");
    const [inputEndDate, setInputEndDate] = useState(initial.endDate ?? "");
    //keep as strings so empty field doesn't equal 0
    const [inputMinPrice, setInputMinPrice] = useState<string>(initial.minPrice != null ? String(initial.minPrice) : "");
    const [inputMaxPrice, setInputMaxPrice] = useState<string>(initial.maxPrice != null ? String(initial.maxPrice) : "");

    function toggleCategory(category: string){
        setSelectedCategories((prev) =>
            prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
        );
    }

    function applyFilters(){
        const nextParams = new URLSearchParams(currentSearchParams?.toString() ?? "");

        //Always reset pagination when filters change
        nextParams.set("page", "1");
        nextParams.set("pageSize", String(initial.pageSize));

        //Query text
        if(inputQueryText.trim()){ 
            nextParams.set("q", inputQueryText.trim());
        } else {
            nextParams.delete("q");
        }

        //Categories
        if(selectedCategories.length){
            nextParams.set("category", selectedCategories.join(","));
        } else {
            nextParams.delete("category");
        }

        //Dates(yyyy-mm-dd)
        if(inputStartDate){
            nextParams.set("start", inputStartDate);
        } else {
            nextParams.delete("start");
        }

        if(inputEndDate){
            nextParams.set("end", inputEndDate);
        } else {
            nextParams.delete("end");
        }

        //Prices (only set if numeric)
        if(inputMinPrice.trim() !== "") {
            nextParams.set("minPrice", inputMinPrice.trim());
        } else {
            nextParams.delete("minPrice");
        }
        if(inputMaxPrice.trim() !== ""){
            nextParams.set("maxPrice", inputMaxPrice.trim());
        } else{
            nextParams.delete("maxPrice");
        }

        router.push(`/?${nextParams.toString()}`);
    }

    function resetFilters(){
        router.push("/?page=1");
    }

    return (
        <section className="rounded border p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {/* Query text */}
                <div>
                    <label htmlFor="filter-query" className="block text-sm font-medium">
                        Search
                    </label>
                    <input
                        id="filter-query"
                        value={inputQueryText}
                        onChange={(e) => setInputQueryText(e.target.value)}
                        placeholder="Conference name..."
                        className="mt-1 w-full rounded border px-3 py-2"
                        />
                </div>

                {/* Start date */}
                <div>
                    <label htmlFor="filter-start" className="block text-sm font-medium">
                        Date Start
                    </label>
                    <input
                        id="filter-start"
                        type="date"
                        value={inputStartDate}
                        onChange={(e) => setInputStartDate(e.target.value)}
                        className="mt-1 w-full rounded border px-3 py-2"
                        />
                </div>

                {/* End date */}
                <div>
                    <label htmlFor="filter-end" className="block text-sm font-medium">
                        Date End
                    </label>
                    <input
                        id="filter-end"
                        type="date"
                        value={inputEndDate}
                        onChange={(e) => setInputEndDate(e.target.value)}
                        className="mt-1 w-full rounded border px-3 py-2"
                        />
                </div>

                {/* Min price */}
                <div>
                    <label htmlFor="filter-min-price" className="block text-sm font-medium">
                        Min. Price
                    </label>
                    <input
                        id="filter-min-price"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        value={String(inputMinPrice)}
                        onChange={(e) => setInputMinPrice(e.target.value)}
                        className="mt-1 w-full rounded border px-3 py-2"
                        />
                </div>

                {/* Max price */}
                <div>
                    <label htmlFor="filter-max-price" className="block text-sm font-medium">
                        Max Price
                    </label>
                    <input
                        id="filter-max-price"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        value={String(inputMaxPrice)}
                        onChange={(e) => setInputMaxPrice(e.target.value)}
                        className="mt-1 w-full rounded border px-3 py-2"
                        />
                </div>

                {/* Category pills */}
                <div>
                    <label className="block text-sm font-medium">
                        Categories
                    </label>
                    <div className="mt-1 flex flex-wrap gap-2">
                        {allCategories.map((categoryName) => {
                            const isSelected = selectedCategories.includes(categoryName);
                            return (
                                <button
                                    type="button"
                                    key={categoryName}
                                    onClick={() => toggleCategory(categoryName)}
                                    className={`rounded px-2 py-1 text-xs ${
                                        isSelected 
                                        ? "bg-black text-white"
                                        : "bg-neutral-100 text-neutral-800"
                                    }`}
                                    aria-pressed={isSelected}
                                    >
                                        {categoryName}
                                    </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                    onClick={applyFilters}
                    className="rounded bg-black px-3 py-2 text-white"
                    >
                        Apply
                    </button>
                <button
                    onClick={resetFilters}
                    className="rounded border px-3 py-2"
                    >
                        Reset
                    </button>
            </div>
        </section>
    );
}