"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "@/lib/state/app-store";
import type { Conference } from "@/lib/types";
import Countdown from "../common/Countdown";
import ConferenceCard from "../conf/ConferenceCard";

type ApiListResponse = { items: Conference[] };

export default function DashboardClient() {
  const { state, dispatch } = useAppStore();

  // Load conferences for resolving favorites/registrations
  const [conferences, setConferences] = useState<Conference[]>([]);
  const [loadingConfs, setLoadingConfs] = useState(true);
  // Profile editor state
  const [profileFullName, setProfileFullName] = useState(state.profile.fullName);
  const [profileEmail, setProfileEmail] = useState(state.profile.email);
  const [preferredPageSize, setPreferredPageSize] = useState(state.profile.preferredPageSize);
  const [themeChoice, setThemeChoice] = useState(state.profile.theme);

  // Toast
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setProfileFullName(state.profile.fullName);
    setProfileEmail(state.profile.email);
    setPreferredPageSize(state.profile.preferredPageSize);
    setThemeChoice(state.profile.theme);
  }, [state.profile]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        // use the public list endpoint with a large pageSize
        const res = await fetch("/api/conferences?page=1&pageSize=1000", { cache: "no-store" });
        const data = (await res.json().catch(() => null)) as ApiListResponse | null;
        if (isMounted && res.ok && data && Array.isArray(data.items)) {
          setConferences(
            data.items.slice().sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
          );
        }
      } finally {
        if (isMounted) setLoadingConfs(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const conferenceById = useMemo(() => {
    const map = new Map(conferences.map((c) => [c.id, c]));
    return (id: string) => map.get(id) ?? null;
  }, [conferences]);

  const favoriteConferences = state.favorites
    .map(conferenceById)
    .filter((c): c is Conference => !!c)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const registeredConferences = state.registrations
    .map((r) => conferenceById(r.conferenceId))
    .filter((c): c is Conference => !!c)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const allForNextPick = registeredConferences.length
    ? registeredConferences
    : favoriteConferences.length
    ? favoriteConferences
    : conferences;

  const nextUpcoming = useMemo(() => {
    const now = Date.now();
    return (
      allForNextPick
        .filter((c) => new Date(c.endDate ?? c.date).getTime() >= now)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0] ?? null
    );
  }, [allForNextPick]);


  function saveProfile() {
    dispatch({
      type: "set_profile",
      partial: {
        fullName: profileFullName.trim(),
        email: profileEmail.trim(),
        preferredPageSize: Math.max(1, Math.min(24, Number(preferredPageSize) || 6)),
        theme: themeChoice,
      },
    });
    //Store preferred page size as a cookie
    try{
      const maxAge = 60 * 6 * 24 * 365 //1 year
      document.cookie = `pref_page_size=${Math.max(1, Math.min(24, Number(preferredPageSize) || 6)
      )}; Path=/; Max-Age=${maxAge}`;
    }catch {}
    setToast("Profile saved ✓");
    setTimeout(() => setToast(null), 2200);
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Your Dashboard</h1>
        {nextUpcoming && (
          <p className="mt-1 text-neutral-600 dark:text-neutral-300">
            Next upcoming event starts in{" "}
            <Countdown targetISO={nextUpcoming.date} /> — {nextUpcoming.name}
          </p>
        )}
      </header>

      {/* Profile */}
      <section className="rounded border p-4">
        <h2 className="mb-3 text-lg font-medium">Profile</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium" htmlFor="profile-name">
              Full name
            </label>
            <input
              id="profile-name"
              className="mt-1 w-full rounded border px-3 py-2"
              value={profileFullName}
              onChange={(e) => setProfileFullName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="profile-email">
              Email
            </label>
            <input
              id="profile-email"
              className="mt-1 w-full rounded border px-3 py-2"
              type="email"
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="profile-page-size">
              Preferred page size
            </label>
            <input
              id="profile-page-size"
              className="mt-1 w-full rounded border px-3 py-2"
              type="number"
              min={1}
              max={24}
              value={preferredPageSize}
              onChange={(e) => setPreferredPageSize(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="profile-theme">
              Theme
            </label>
            <select
              id="profile-theme"
              className="mt-1 w-full rounded border px-3 py-2"
              value={themeChoice}
              onChange={(e) => setThemeChoice(e.target.value as typeof state.profile.theme)}
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={saveProfile} className="rounded bg-black px-3 py-2 text-white">
            Save Profile
          </button>
        </div>
      </section>

      {/* Favorites */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Favorites ({favoriteConferences.length})</h2>
        {loadingConfs ? (
          <div className="rounded border p-4 text-neutral-600">Loading…</div>
        ) : favoriteConferences.length ? (
          <div className="grid gap-4 grid-cols-[repeat(auto-fit, minmax(280px, 1fr))] mx-auto max-w-6xl w-full">
            {favoriteConferences.map((conf) => (
              <ConferenceCard key={conf.id} {...conf} />
            ))}
          </div>
        ): (
          <div className="rounded border p-4 text-neutral-600">
            No favorites yet. Mark conferences with &quot;☆ Favorite&quot; to see them here.
          </div>
        )}
      </section>

      {/* Registrations */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">
          Registered Conferences ({registeredConferences.length})
        </h2>
        {loadingConfs ? (
          <div className="rounded border p-4 text-neutral-600">Loading…</div>
        ) : registeredConferences.length ? (
          <div className="grid gap-4 grid-cols-[repeat(auto-fit, minmax(280px, 1fr))] mx-auto max-w-6xl w-full">
            {registeredConferences.map((conf) => (
              <ConferenceCard key={conf.id} {...conf} />
            ))}
          </div>
        ) : (
          <div className="rounded border p-4 text-neutral-600">
            You have not registered for any conferences yet.
          </div>
        )}
      </section>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded border bg-white px-4 py-2 text-sm shadow
          bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-700"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
