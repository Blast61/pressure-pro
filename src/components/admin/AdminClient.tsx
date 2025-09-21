"use client";

import { useEffect, useMemo, useState } from "react";
import type { Conference } from "@/lib/types";

type SaveMode = "create" | "edit";
type EditableConference = Omit<Conference, "speakers">;
type ApiListResponse = { items: EditableConference[] };
type ApiError = { error: string };

function emptyConference(): EditableConference {
    return{
    id: "",
    name: "",
    description: "",
    date: "",
    endDate: undefined,
    location: "",
    price: 0,
    category: [],
    imageUrl: undefined,
    maxAttendees: 0,
    currentAttendees: 0,
    isFeatured: false,
  };
}

export default function AdminClient(){
    const [items, setItems] = useState<EditableConference[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorText, setErrorText] = useState<string | null>(null);

    const [mode, setMode] = useState<SaveMode>("create");
    const [draft, setDraft] = useState<EditableConference>(emptyConference());

    //Fetch List
    async function refreshList(){
        setLoading(true);
        setErrorText(null);
        try{
            const res = await fetch("/api/admin/conferences", { cache: "no-store" });
            // const json = await res.json();
            // if(queryObjects.ok) throw new Error(json.error || "Failed to load conferences");
            // setItems(json.items);
            const data = (await res.json().catch(() => ({}))) as ApiListResponse | ApiError | Record<string, unknown>;
            if(!res.ok){
              throw new Error((data as ApiError).error || "Failed to load conferences");
            }
            setItems((data as ApiListResponse).items ?? []);
        } catch (err: unknown){
            setErrorText(err instanceof Error ? err.message : "Failed to load conferences");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshList();
    }, []);

  const knownCategories = useMemo(() => 
    Array.from(new Set(items.flatMap((c) => c.category))).sort(), [items]
  );


    function startCreate() {
        setMode("create");
        setDraft(emptyConference());
    }

    function startEdit(conference: EditableConference) {
        setMode("edit");
        setDraft({ ...conference});
    }

    async function submitDraft(){
        setErrorText(null);
        //Client Validation
        const problems: string[] = [];
        if(!draft.id) {
            problems.push("ID is required.");
        }
        if(!draft.name){
            problems.push("Name is required.");
        }
        if(!draft.date){
            problems.push("Start date is required.");
        }
        if(!draft.location){
            problems.push("Location is required.");
        }
        if(draft.price < 0){
            problems.push("Price cannot be negative.");
        }
        if(draft.currentAttendees > draft.maxAttendees){
            problems.push("Current attendees cannot exceed maximum.");
        }
        if(draft.endDate){
            const startMs = new Date(draft.date).getTime();
            const endMs = new Date(draft.endDate).getTime();
            if(!Number.isNaN(startMs) && !Number.isNaN(endMs) && endMs < startMs) {
                problems.push("End date must be the same as or after start date.");
            }
        }
        if(problems.length){
            setErrorText(problems.join(" "));
            return;
        }

        const payload: Partial<Conference> = {
            ...draft,
            //normalize categories from comma-separated string if user types that in
            category: Array.isArray(draft.category) 
                ? draft.category
                : String(draft.category || "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
        };

        if(mode === "create"){
            const res = await fetch("/api/admin/conferences", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });
            const data = (await res.json().catch(() => ({}))) as ApiError | Record<string, unknown>;
            if(!res.ok){
              setErrorText((data as ApiError).error || "Create failed");
              return;
            }
        } else {
            const res = await fetch(`/api/admin/conferences/${draft.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });
            const data = (await res.json().catch(() => ({}))) as ApiError | Record<string, unknown>;
            if(!res.ok){
              setErrorText((data as ApiError).error || "Update failed");
              return;
            }
        }

        await refreshList();
        startCreate();
    }

    async function deleteConference(id: string) {
        setErrorText(null);
        const res = await fetch(`/api/admin/conferences/${id}`, { method: "DELETE" });
        const json = await res.json().catch(() => ({}));
        if(!res.ok) {
            setErrorText(json.error || "Delete failed");
            return;
        }
        await refreshList();
    }

    return (
         <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin — Conferences</h1>
        <button className="rounded border px-3 py-2" onClick={refreshList}>
          Refresh
        </button>
      </header>

      {/* Error */}
      {errorText && (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-red-800">
          {errorText}
        </div>
      )}

      {/* List */}
      <section className="rounded border">
        {loading ? (
          <div className="p-4 text-neutral-600">Loading…</div>
        ) : items.length ? (
          <ul className="divide-y">
            {items.map((conf) => (
              <li key={conf.id} className="flex items-center justify-between p-3">
                <div>
                  <div className="font-medium">{conf.name}</div>
                  <div className="text-sm text-neutral-600">
                    {conf.location} · {conf.category.join(", ")}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="rounded border px-2 py-1 text-sm"
                    onClick={() => startEdit(conf)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded border px-2 py-1 text-sm text-red-700"
                    onClick={() => deleteConference(conf.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-4 text-neutral-600">No conferences yet.</div>
        )}
      </section>

      {/* Form */}
      <section className="rounded border p-4">
        <h2 className="mb-3 text-lg font-medium">
          {mode === "create" ? "Create Conference" : `Edit Conference (${draft.id})`}
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* ID */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-id">
              ID (slug)
            </label>
            <input
              id="admin-id"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.id}
              onChange={(e) => setDraft({ ...draft, id: e.target.value })}
              disabled={mode === "edit"}
              placeholder="react-summit-2026"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-name">
              Name
            </label>
            <input
              id="admin-name"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              required
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-date">
              Start date (ISO or yyyy-mm-dd)
            </label>
            <input
              id="admin-date"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              placeholder="2025-11-18T00:00:00.000Z"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-end-date">
              End date (optional)
            </label>
            <input
              id="admin-end-date"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.endDate ?? ""}
              onChange={(e) => setDraft({ ...draft, endDate: e.target.value || undefined })}
              placeholder="2025-11-21T23:59:59.000Z"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-location">
              Location
            </label>
            <input
              id="admin-location"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.location}
              onChange={(e) => setDraft({ ...draft, location: e.target.value })}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-price">
              Price (USD)
            </label>
            <input
              id="admin-price"
              type="number"
              min={0}
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.price}
              onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) || 0 })}
              required
            />
          </div>

          {/* Categories */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium" htmlFor="admin-category">
              Categories (comma-separated)
            </label>
            <input
              id="admin-category"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.category.join(", ")}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  category: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                })
              }
              placeholder={knownCategories.join(", ")}
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-max">
              Max attendees
            </label>
            <input
              id="admin-max"
              type="number"
              min={1}
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.maxAttendees}
              onChange={(e) =>
                setDraft({ ...draft, maxAttendees: Math.max(1, Number(e.target.value) || 1) })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-current">
              Current attendees
            </label>
            <input
              id="admin-current"
              type="number"
              min={0}
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.currentAttendees}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  currentAttendees: Math.max(0, Number(e.target.value) || 0),
                })
              }
              required
            />
          </div>

          {/* Featured + Image URL */}
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-featured">
              Featured
            </label>
            <input
              id="admin-featured"
              type="checkbox"
              className="mt-2"
              checked={draft.isFeatured}
              onChange={(e) => setDraft({ ...draft, isFeatured: e.target.checked })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="admin-image">
              Image URL (optional)
            </label>
            <input
              id="admin-image"
              className="mt-1 w-full rounded border px-3 py-2"
              value={draft.imageUrl ?? ""}
              onChange={(e) => setDraft({ ...draft, imageUrl: e.target.value || undefined })}
              placeholder="/images/placeholder.jpg"
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium" htmlFor="admin-description">
              Description
            </label>
            <textarea
              id="admin-description"
              className="mt-1 w-full rounded border px-3 py-2"
              rows={4}
              value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={submitDraft} className="rounded bg-black px-3 py-2 text-white">
            {mode === "create" ? "Create" : "Save changes"}
          </button>
          <button onClick={startCreate} className="rounded border px-3 py-2">
            Reset form
          </button>
        </div>
      </section>
    </div>
    )
}