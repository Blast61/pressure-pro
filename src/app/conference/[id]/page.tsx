import { notFound } from "next/navigation";
import { SEED_CONFERENCES } from "@/data/conferences.seed";
import { formatDateRange } from "@/lib/utils/date";
import { formatPrice } from "@/lib/utils/price";
import { computeStatus } from "@/lib/utils/status";
import Avatar from "@/components/common/Avatar";
import RegistrationForm from "@/components/conf/RegistrationForm";
import FavoriteButton from "@/components/common/FavoriteButton";

export default async function ConferenceDetail({ params }: { params: Promise<{ id: string }>; 
}){
    const { id } = await params;
    const conference = SEED_CONFERENCES.find((c) => c.id === id);
    if(!conference) notFound();

    const when = formatDateRange(conference.date, conference.endDate);
    const status = computeStatus(
        conference.endDate ?? conference.date,
        conference.currentAttendees,
        conference.maxAttendees
    );

    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold">
                    {conference.name}
                    <FavoriteButton conferenceId={conference.id} size="md" />
                </h1>
                <div className="text-neutral-600">
                    {when} | {conference.location} | {formatPrice(conference.price)}
                </div>
                <div className="flex flex-wrap gap-2">
                    {conference.category.map((tag) => (
                        <span key={tag} className="rounded bg-neutral-100 px-2 py-1 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-1">
                    <StatusBadge status={status} />
                </div>
            </header>

            <section className="prose max-w-none">
                <p>{conference.description}</p>
            </section>

            {conference.speakers.length > 0 && (
                <section>
                    <h2 className="mb-3 text-lg font-medium">
                        Speakers
                    </h2>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {conference.speakers.map((s) => (
                            <li key={s.id} className="flex items-center gap-3 rounded border p-3">
                                <Avatar name={s.name} src={s.avatarUrl} size={44} />
                                <div>
                                    <div className="font-medium">{s.name}</div>
                                    <div className="text-sm text-neutral-600">
                                        {s.title} - {s.company}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
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