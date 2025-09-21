/**
 * @param iso 
 * @param locale 
 * @param options 
 * @returns 
 * Formats an ISO timestamp deterministically for SSR/CSR.
 * Defaults: locale 'en-US' and timeZone 'UTC' to avoid hydration drift.
 * Returns: "Invalid date" if the input cannot be parsed
 * 
 * Prefer using this for the SSR baseline string. The client can then enhance it to the user's locale/time zone
*/
export function formatDate(iso: string, locale: string | string[] = "en-US", options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
}): string{
    const date = new Date(iso);
    if(Number.isNaN(date.getTime())){
        return "Invalid date";
    }
    return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * Formats a start-end date range.
 * 
 * 
 */
export function formatDateRange(
    startISO: string,
    endISO?: string,
    locale: string | string[] = "en-US",
    timeZone = "UTC"
): string {
    const start = new Date(startISO);
    const end = endISO ? new Date(endISO) : null;

    const badStart = Number.isNaN(start.getTime());
    const badEnd = end ? Number.isNaN(end.getTime()) : false;

    if(badStart && !end){
        return "Invalid date";
    }
    if(badStart && end){
        return formatDate(endISO!, locale, { month: "short", day: "numeric", year: "numeric", timeZone: timeZone});
    }
    if(!badStart && badEnd) {
        return formatDate(startISO, locale, { month: "short", day: "numeric", year: "numeric", timeZone: timeZone});
    }
    if(!end){
        return formatDate(startISO, locale, { month: "short", day: "numeric", year: "numeric", timeZone: timeZone});
    }

    //Both valid
    const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
    const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();

    if(sameMonth){
        const month  = new Intl.DateTimeFormat(locale, { month: "short", timeZone }).format(start);
        // Use en dash for ranges
        return `${month} ${start.getUTCDate()}-${end.getUTCDate()}, ${start.getUTCFullYear()}`
    }

    const fmtFull = (date: Date) => {
        new Intl.DateTimeFormat(locale, {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone
        }).format(date);
    }
    return `${fmtFull(start)} - ${fmtFull(end!)}`;
}


/**
 * True if the ISO timestamp occurs before "now"
 (local clock) 
 * @param iso - timestamp
 * @param nowMs - Comparative timestamp in ms
 * @returns 
 */
export function isPast(iso: string, nowMs: number = Date.now()): boolean{
    return new Date(iso).getTime() < nowMs;
}