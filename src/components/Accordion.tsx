"use client";

import { useId, useState } from "react";

type Item = { title: string; body: string };

export default function Accordion({
  items,
  variant = "caps",
}: {
  items: Item[];
  variant?: "caps" | "serif";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <ul>
      {items.map((it, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <li key={it.title} className="border-b border-secondary">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 py-5 text-left"
              >
                <span
                  aria-hidden
                  className="relative h-3 w-3 shrink-0 text-primary"
                >
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform ${
                      isOpen ? "scale-y-0" : ""
                    }`}
                  />
                </span>
                <span
                  className={
                    variant === "caps"
                      ? "text-[0.78rem] uppercase tracking-[0.16em] text-ink"
                      : "font-serif text-[1.35rem] leading-snug text-primary"
                  }
                >
                  {it.title}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pl-7 pr-4"
            >
              <p className="body-copy max-w-2xl text-[0.95rem]">{it.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
