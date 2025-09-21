"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/state/app-store";
import { SEED_CONFERENCES } from "@/data/conferences.seed";
import Countdown from "../common/Countdown";
import ConferenceCard from "../conf/ConferenceCard";

/**
 * Dashboard groups profile editing, favorites, registrations, and a "next-event" countdown
 */
export default function DashboardClient(){
    const { state, dispatch } = useAppStore();

    //Resolve favorites and registrations to full conference objects
    const conferenceById = useMemo(() => {
        const map = new Map(SEED_CONFERENCES.map((c) => [c.id, c]));
        return (id: string) => map.get(id) ?? null;
    }, []);

    const favoriteConferences = state.favorites
        .map(conferenceById)
        .filter((c): c is NonNullable<ReturnType<typeof conferenceById>> => !!c)
        //sort soonest first
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );

    const registeredConferences = state.registrations.map((r) => conferenceById(r.conferenceId))
        .filter((c): c is NonNullable<ReturnType<typeof conferenceById>> => !!c)
        //sort soonest first
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()       
        );

    //Pick "next upcoming" from registrations, first, then favorites, otherwise global earliest
    const nextUpcoming = useMemo(() => {
        const upcomingFrom = (list: typeof SEED_CONFERENCES) => list.filter((c) => new Date(c.endDate ?? c.date).getTime() >= Date.now())
            .sort(
                (a,b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
            )[0] ?? null;
        
        return (
            upcomingFrom(registeredConferences) ||
            upcomingFrom(favoriteConferences) ||
            upcomingFrom(SEED_CONFERENCES)
        );
    }, [favoriteConferences, registeredConferences]);

    //Simple profile edit form
    const [profileFullName, setProfileFullName] = useState(state.profile.fullName);
    const [profileEmail, setProfileEmail] = useState(state.profile.email);
    const [preferredPageSize, setPreferredPageSize] = useState(state.profile.preferredPageSize);
    const [themeChoice, setThemeChoice] = useState(state.profile.theme);

    function saveProfile(){
        dispatch({
            type: "set_profile",
            partial: {
                fullName: profileEmail.trim(),
                email: profileEmail.trim(),
                preferredPageSize: Math.max(1, Math.min(24, Number(preferredPageSize) || 6)),
                theme: themeChoice,
            },
        });
    }

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-2xl font-semibold">Your Dashboard</h1>
                {nextUpcoming && (
                    <p className="mt-1 text-neutral-700">
                        Next upcoming event starts in: {" "}
                        <Countdown targetISO={nextUpcoming.date} />
                        {" "}- {nextUpcoming.name}
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
                            className="mt-1 w-full rounded boarder px-3 py-2"
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
                {favoriteConferences.length ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="text-lg font-medium">Registered Conferences ({registeredConferences.length})</h2>
                {registeredConferences.length ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols2 lg:grid-cols-3">
                        {registeredConferences.map((conf) => (
                            <ConferenceCard key={conf.id} {...conf} />
                        ))}
                    </div>
                ): (
                    <div className="rounded border p-4 text-neutral-600">
                        You have not registered for any conferences yet.
                    </div>
                )}
            </section>
        </div>
    );
}
