"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Speaker } from "@/lib/types";

type SpeakersClientProps = {
  speakers: Speaker[];
  sectionTitle?: string;
};

export default function SpeakersClient({
  speakers,
  sectionTitle = "Speakers",
}: SpeakersClientProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Speaker | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openModal(speaker: Speaker, trigger: HTMLButtonElement) {
    setActive(speaker);
    lastTriggerRef.current = trigger;
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setActive(null);
    lastTriggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(evt: KeyboardEvent) {
      if (evt.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!speakers?.length) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium">{sectionTitle}</h2>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {speakers.map((sp) => (
          <li key={sp.id}>
            <button
              type="button"
              onClick={(e) => openModal(sp, e.currentTarget)}
              className="flex w-full items-center gap-3 rounded border px-3 py-3 text-left transition hover:border-indigo-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {sp.avatarUrl ? (
                <Image
                  src={sp.avatarUrl}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-neutral-200" aria-hidden />
              )}
              <div className="min-w-0">
                <div className="truncate font-medium">{sp.name}</div>
                <div className="truncate text-sm text-neutral-500">
                  {sp.title} — {sp.company}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open && active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 bg-black/60"
            onClick={closeModal}
          />
          {/* dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} details`}
            className="relative z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900"
          >
            <button
              onClick={closeModal}
              aria-label="Close speaker details"
              className="absolute right-3 top-3 rounded p-1 text-neutral-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              ×
            </button>

            <div className="flex items-center gap-4">
              {active.avatarUrl ? (
                <Image
                  src={active.avatarUrl}
                  alt=""
                  width={72}
                  height={72}
                  className="h-18 w-18 rounded-full object-cover"
                />
              ) : (
                <div className="h-18 w-18 rounded-full bg-neutral-200" aria-hidden />
              )}
              <div>
                <h3 className="text-xl font-semibold">{active.name}</h3>
                <p className="text-sm text-neutral-500">
                  {active.title} — {active.company}
                </p>
              </div>
            </div>

            {active.bio && (
              <p className="mt-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {active.bio}
              </p>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="rounded border px-3 py-2 text-sm hover:border-indigo-300 hover:shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
