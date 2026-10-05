import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-secondary/40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20 lg:py-28">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden lg:max-w-none">
          <Image
            src={about.image}
            alt={about.alt}
            fill
            sizes="(min-width: 1024px) 26rem, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h-display mt-5 max-w-[20ch] text-4xl lg:text-[2.7rem]">
            {about.heading}{" "}
            <span className="script text-[1.3em] leading-none">{about.script}</span>
          </h2>
          <div className="mt-8 max-w-xl space-y-5">
            {about.body.map((p) => (
              <p key={p.slice(0, 20)} className="body-copy">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <a href="#contact" className="btn-pill">
              {about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
