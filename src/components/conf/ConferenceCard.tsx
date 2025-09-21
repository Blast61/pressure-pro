import Link from "next/link";
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
>;

export default function ConferenceCard(props: ConferenceCardProps){
    const formattedWhen = formatDateRange(props.date, props.endDate);
    //Note: computeStatus signature is (dateISO, current, max)
    const registrationStatus = computeStatus(
        props.endDate ?? props.date,
        props.currentAttendees,
        props.maxAttendees
    );

    return (
        <article className="rounded border p-4">
            <header className="flex items-start justify-between gap-2">
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

            <p className="mt-1 text-sm text-neutral-600">
                {formattedWhen} ~ {props.location} ~ {formatPrice(props.price)}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
                {props.category.map((categoryTag) => (
                    <span 
                        key={categoryTag}
                        className="rounded bg-neutral-100 px-2 py-0.5 text-xs"
                        >
                            {categoryTag}
                        </span>
                ))}
            </div>
        </article>
    );
}