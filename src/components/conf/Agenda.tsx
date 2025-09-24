"use client";

import Avatar from "@/components/common/Avatar";
import type { AgendaDay, Speaker } from "@/lib/types";

function formatClock(input: string) {
  // "HH:mm" -> "9:00 AM"; ISO -> locale time
  const maybeIso = /\d{4}-\d{2}-\d{2}T/.test(input);
  if (maybeIso) return new Date(input).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  // HH:mm fallback assuming today
  const [h, m] = input.split(":").map(Number);
  const d = new Date();
  d.setHours(h ?? 0, m ?? 0, 0, 0);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function Agenda({
  days,
  speakers,
}: {
  days: AgendaDay[];
  speakers: Speaker[];
}) {
  const byId = new Map(speakers.map((s) => [s.id, s]));

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium">Agenda</h2>

      <div className="space-y-6">
        {days.map((day) => {
          const prettyDate = new Date(day.date).toLocaleDateString([], {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          return (
            <div key={day.date} className="rounded border">
              <div className="border-b px-4 py-2 text-sm font-semibold">
                {prettyDate}
              </div>

              <ul className="divide-y">
                {day.items.map((item, idx) => {
                  const sp = item.speakerId ? byId.get(item.speakerId) : undefined;
                  return (
                    <li key={`${day.date}-${idx}`} className="flex items-center gap-3 px-4 py-3">
                      {/* Avatar / bullet */}
                      {sp ? (
                        <Avatar name={sp.name} src={sp.avatarUrl} size={32} />
                      ) : (
                        <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                      )}

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <div className="truncate font-medium">
                            {item.title}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {formatClock(item.start)}
                            {item.end ? ` – ${formatClock(item.end)}` : null}
                          </div>
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                          {sp && <span className="truncate">{sp.name}{sp.company ? ` — ${sp.company}` : ""}</span>}
                          {item.track && (
                            <span className="rounded bg-neutral-100 px-2 py-0.5 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                              {item.track}
                            </span>
                          )}
                          {item.location && <span className="truncate">{item.location}</span>}
                        </div>

                        {item.description && (
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
