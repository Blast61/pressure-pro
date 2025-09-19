
/**
 * 
 * @param iso 
 * @param locale 
 * @param options 
 * @returns 
 * Formats an ISO timestamp deterministically for SSR/CSR.
 * Defaults: locale 'en-US' and timeZone 'UTC' to avoid hydration drift.
 * 
 * Prefer using this for the SSR baseline string. The client can then enhance it to the user's locale/time zone
*/
export function formatDate(iso: string, locale: string | string[] = "en-US", options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
}): string{
    return new Intl.DateTimeFormat(locale, options).format(new Date(iso));
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