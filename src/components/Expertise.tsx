import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-20 lg:py-28">
        <h2 id="expertise-heading" className="h-display text-4xl lg:text-[2.6rem]">
          {expertise.heading}
          <br />
          <span className="script text-[1.3em] leading-none">{expertise.script}</span>
        </h2>
        <ul className="grid gap-x-16 sm:grid-cols-2">
          {expertise.items.map((i) => (
            <li
              key={i}
              className="border-b border-secondary py-5 text-[0.78rem] uppercase tracking-[0.16em] text-ink"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
