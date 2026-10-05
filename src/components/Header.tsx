"use client";

import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

const linkCls =
  "text-[0.76rem] tracking-[0.16em] uppercase text-ink hover:text-accent transition-colors";

function Dropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <a href={href} className={linkCls} aria-haspopup="true">
        {label}
      </a>
      <div className="invisible absolute left-1/2 top-full z-30 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[15rem] border border-secondary bg-white px-5 py-4 shadow-sm">
          {items.map((i) => (
            <li key={i.label}>
              <a
                href={i.href}
                className="block py-1.5 text-[0.7rem] tracking-[0.14em] uppercase text-muted hover:text-accent"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-linen/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-14">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex xl:gap-10">
          <a href="#about" className={linkCls}>About</a>
          <Dropdown label="Specialties" href="#specialties" items={nav.specialties} />
          <Dropdown label="Methods" href="#methods" items={nav.methods} />
          <a href="#office" className={linkCls}>Our Office</a>
          <a href="#faqs" className={linkCls}>FAQs</a>
          <a href="#contact" className="btn-pill !px-6 !py-2.5">Contact</a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-primary"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="lg:hidden border-t border-secondary bg-linen px-6 pb-8 pt-4"
        >
          <ul className="flex flex-col">
            {[
              ["About", "#about"],
              ["Specialties", "#specialties"],
              ["Methods", "#methods"],
              ["Our Office", "#office"],
              ["FAQs", "#faqs"],
            ].map(([l, h]) => (
              <li key={l} className="border-b border-secondary/70">
                <a href={h} onClick={close} className={`${linkCls} block py-4`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="btn-pill mt-6">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
