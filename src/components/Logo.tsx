import { site } from "@/lib/content";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" aria-label={`${site.name} – home`} className="inline-block leading-none">
      <span
        className={`block font-serif text-[1.9rem] sm:text-[2.1rem] ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {site.shortName}
      </span>
      <span
        className={`mt-1 block text-[0.6rem] tracking-[0.34em] uppercase ${
          light ? "text-secondary" : "text-accent"
        }`}
      >
        {site.tagline}
      </span>
    </a>
  );
}
