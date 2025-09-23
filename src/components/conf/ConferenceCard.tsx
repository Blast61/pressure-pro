import Link from "next/link";
import Image from "next/image";
import { formatDateRange } from "@/lib/utils/date";
import { formatPrice } from "@/lib/utils/price";
import { computeStatus } from "@/lib/utils/status";
import type { Conference } from "@/lib/types";
import FavoriteButton from "../common/FavoriteButton";

function StatusBadge({ status }: { status: "Open" | "Closed" | "Sold Out"}) {
    const styleClass = status === "Open"
    ? "bg-green-50 text-green-700"
    : status === "Sold Out"
    ? "bg-yellow-50 text-yellow-800"
    : "bg-red-50 text-red-700";

    return <span className={`rounded px-2 py-1 text-xs ${styleClass}`}>
        {status}
    </span>
}

type ConferenceCardProps = Pick<Conference,
    | "id"
    | "name"
    | "date"
    | "endDate"
    | "location"
    | "price"
    | "category"
    | "currentAttendees"
    | "maxAttendees"
    | "imageUrl"
>;

export default function ConferenceCard(props: ConferenceCardProps){
    const formattedWhen = formatDateRange(props.date, props.endDate);
    //Note: computeStatus signature is (dateISO, current, max)
    const registrationStatus = computeStatus(
        props.endDate ?? props.date,
        props.currentAttendees,
        props.maxAttendees
    );

    const cover = props.imageUrl || "/images/placeholder.jpg"
    return (
    <article className="group relative overflow-hidden rounded border transition hover:border-indigo-300 hover:shadow-lg">
        {/* background image */}
        <Image
        src={cover}
        alt=""
        role="presentation"
        fill
        sizes="(max-width:768px) 100vw, 33vw"
        className="pointer-events-none object-contain p-8 opacity-15 transition group-hover:opacity-25"
        priority={false}
        />
        {/* overlay for contrast */}
        <div 
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/10" />

        {/* content */}
        <div className="relative p-4">
        <header className="mb-2 flex items-center justify-between">
            <Link
            href={`/conference/${props.id}`}
            className="text-lg font-semibold hover:underline"
            >
            {props.name}
            </Link>
            <div className="flex items-center gap-2">
            <StatusBadge status={registrationStatus} />
            <FavoriteButton conferenceId={props.id} />
            </div>
        </header>

        <p className="mt-1 text-sm text-neutral-200/90">
            {formattedWhen} ~ {props.location} ~ {formatPrice(props.price)}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
            {props.category.map((tag) => (
            <span
                key={tag}
                className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-800 group-hover:shadow-sm"
            >
                {tag}
            </span>
            ))}
        </div>
        </div>
    </article>
    );
}