import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/server/db";
import { formatDateRange } from "@/lib/utils/date";
import { formatPrice } from "@/lib/utils/price";
import { computeStatus } from "@/lib/utils/status";
import RegistrationForm from "@/components/conf/RegistrationForm";
import FavoriteButton from "@/components/common/FavoriteButton";
import Chip from "@/components/common/Chip";
import SpeakersClient from "@/components/conf/SpeakersClient";
import Agenda from "@/components/conf/Agenda";

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
): Promise<Metadata>{
    const { id } = await params;
    const conference = db.get(id);
    if(!conference) {
        return { title: "Conference not found" };
    }
    const when = formatDateRange(conference.date, conference.endDate);
    const description = conference.description || `${conference.name} in ${conference.location} | ${when} | ${formatPrice(conference.price)} `;
    const ogPath = `/conference/${conference.id}/opengraph-image`;

    return {
        title: conference.name,
        description,
        openGraph: {
            title: conference.name,
            description,
            url: `/conference/${conference.id}`,
            images: [{ url: ogPath }],
        },
    }
}

export const dynamic = "force-dynamic";

export default async function ConferenceDetail({ params }: { params: Promise<{ id: string }>; 
}){
    const { id } = await params;
    const conference = db.get(id);
    if(!conference) notFound();

    const when = formatDateRange(conference.date, conference.endDate);
    const status = computeStatus(
        conference.endDate ?? conference.date,
        conference.currentAttendees,
        conference.maxAttendees
    );

    return (
        <div className="container mx-auto max-w-5xl space-y-6 px-4 md:px-8">
            <header className="pt-8 text-center space-y-2">
                <h1 className="text-4xl font-bold md:text-5xl flex items-center justify-center gap-3">
                    {conference.name}
                    <FavoriteButton conferenceId={conference.id} size="md" />
                </h1>
                <div className="text-neutral-500">
                    {when} | {conference.location} | {formatPrice(conference.price)}
                </div>
                {!!conference.category.length && (
                    <>
                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                        {conference.category.map((tag) => (
                            <Chip key={tag}>{tag}</Chip>
                        ))}
                    </div>
                    <StatusBadge status={status} />
                    </>
                )}
            </header>

            <section className="flex justify-center prose max-w-none">
                <p>{conference.description}</p>
            </section>

            {/** Speakers with modal */}
            <SpeakersClient speakers={conference.speakers} />
            {/** Agenda */}
            {Array.isArray(conference.agenda) && conference.agenda.length > 0 && (
                <Agenda days={conference.agenda} speakers={conference.speakers} />
            )}

            <RegistrationForm conferenceId={conference.id} dateISO={conference.endDate ?? conference.date} />
        </div>
    );
}

function StatusBadge({ status }: { status: "Open" | "Closed" | "Sold Out" }) {
        const style = 
        status === "Open" 
        ? "bg-green-50 text-green-700"
        : status === "Sold Out"
        ? "bg-yellow-50 text-yellow-800"
        : "bg-red-50 text-red-700";
    return <span className={`rounded px-2 py-1 text-sm ${style}`}>{status}</span>;
}