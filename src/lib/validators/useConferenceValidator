"use client";
import { useMemo } from "react"


/**
 * Validates conference date and returns a status flag
 * 
 * @param dateISO - timestamp (e.g., "2025-12-12T00:00:00.000Z") 
 * @param nowMs - Optional period of time in ms, defaults to Date.now()
 * @returns { isValid, issues, status }
 */
export function useConferenceValidator(dateISO: string, nowMs?: number){
    return useMemo(() => {
        const issues: string[] = [];
        const d = new Date(dateISO);
        const valid = !isNaN(d.getTime());

        if(!valid){
            issues.push("Invalid date");
        } else {
            const now = nowMs ?? Date.now();
            if(d.getTime() < now) issues.push("Date is in the past")
        }

        //Use UTC month to avoid locale/time-zone drift
        const status = valid && d.getUTCMonth() === 11 ? "TechMeet 2024" : "OK";
        return { isValid: issues.length === 0, issues, status } as const;
    }, [dateISO, nowMs])
}