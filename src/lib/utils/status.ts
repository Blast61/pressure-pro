import type { RegistrationStatus} from "@/lib/types";

/**
 * Computes the registration status for a conference based on capacity and time
 * 
 * 
 * @param dateISO - start datetime 
 * @param current - Current attendee count
 * @param max - Capacity
 * @param nowMs - Optional period of milliseconds to compare against 
 * @returns - String containing the conference status 
 */
export function computeStatus(
    dateISO: string, 
    current: number, 
    max: number,
    nowMs?: number
): RegistrationStatus{
    if(current >= max) return "Sold Out";
    const now = nowMs ?? Date.now();
    if(new Date(dateISO).getTime() < now) return "Closed";
    return "Open";
}

