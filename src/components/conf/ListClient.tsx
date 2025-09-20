"use client"
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils/date";
import { formatPrice } from "@/lib/utils/price";

type Conf = {
    id: string;
    name: string;
    date: string;
    location: string;
    price: number;
    category: string[];
}

export default function ListClient() {
    const [items, setItems] = useState<Conf[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/conferences", { cache: "no-store" });
                if(!res.ok) throw new Error("Failed to load");
                const json = await res.json();
                setItems(json.data || []);    
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch(e: any) {
                setErr(e.message ?? "Error");
            } finally {
                setLoading(false);
            }
    })();
}, []);
    if(loading) return <div className="text-neutral-500">Loading...</div>;
    if(err) return <div className="text-red-600">Error: {err}</div>

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(c => (
                <li key={c.id} className="rounded border bg-white p-4">
                    <a href={`/conference/${c.id}`} className="text-lg font-semibold hover:underline">{c.name}</a>
                    <div className="text-sm text-neutral-600">{formatDate(c.date)} - {c.location} - {formatPrice(c.price)}</div>
                    <div className="mt-1 text-xs text-neutral-500">{c.category.join(", ")}</div>
                </li>
            ))}
        </ul>
    );
}