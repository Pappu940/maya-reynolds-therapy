import Image from "next/image";
import { office } from "@/lib/content";

/* NEW SECTION (Part 3): "Our Office" — not in the original template.
   Reuses the site's section rhythm, heading style and type tokens. */
export default function Office() {
  const [main, second, third] = office.images;
  return (
    <section id="office" className="bg-linen">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
          <div>
            <h2 className="h-display text-4xl lg:text-[2.6rem]">
              {office.heading}{" "}
              <span className="script text-[1.3em] leading-none">{office.script}</span>
            </h2>
            <div className="mt-8 space-y-5">
              {office.body.map((p) => (
                <p key={p.slice(0, 20)} className="body-copy">
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-10 border-t border-secondary">
              {office.details.map((d) => (
                <div key={d.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-secondary py-4">
                  <dt className="eyebrow !leading-relaxed">{d.label}</dt>
                  <dd className="text-[0.95rem] font-normal leading-relaxed text-muted">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 3-image gallery */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={second.src}
                alt={second.alt}
                fill
                sizes="(min-width: 1024px) 27vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={third.src}
                alt={third.alt}
                fill
                sizes="(min-width: 1024px) 27vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
