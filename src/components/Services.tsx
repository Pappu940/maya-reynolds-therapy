import Image from "next/image";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="specialties" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <h2 className="h-display text-4xl lg:text-5xl">
          {services.heading}{" "}
          <span className="script text-[1.3em] leading-none">{services.script}</span>
        </h2>
        <p className="body-copy mt-5 max-w-xl">{services.sub}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
          {services.items.map((s) => (
            <article key={s.title}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="h-display mt-8 text-[1.7rem]">{s.title}</h3>
              <p className="body-copy mt-4 text-[0.95rem]">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
