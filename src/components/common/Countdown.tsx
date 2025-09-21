"use client"

import { useEffect, useMemo, useState } from "react";

/**
 * Live countdown to a target ISO date. Updates every second.
 * Renders "0d 00:00:00"
*/
export default function Countdown({ targetISO }: { targetISO: string }) {
    const targetMs = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
    const [nowMs, setNowMs] = useState<number>(() => Date.now());

    useEffect(() => {
        const intervalId = window.setInterval(() => setNowMs(Date.now()), 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    const diff = Math.max(0, targetMs - nowMs);
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds /86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) /60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");

    return (
        <span className="font-mono">
            {days}d {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
    );
}