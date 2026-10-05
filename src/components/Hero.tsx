import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Images: BELOW the copy on mobile (inset, with a sliver peeking in),
            flush-left tall panel on desktop — mirrors the template. */}
        <div className="relative order-2 mb-14 lg:order-1 lg:mb-0 lg:w-[36%] lg:shrink-0">
          <div className="relative aspect-square w-[71%] lg:aspect-auto lg:h-full lg:min-h-[640px] lg:w-full">
            <Image
              src="/images/hero-office-light.webp"
              alt="Warm natural light through sheer curtains and exposed brick in a calm Santa Monica therapy office"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 71vw"
              className="object-cover"
            />
          </div>
          {/* mobile-only peeking image */}
          <div className="absolute bottom-0 right-0 h-[62%] w-[15%] lg:hidden">
            <Image
              src="/images/hero-office-side.webp"
              alt="Floor lamp, sofa and shelving in the quiet therapy room"
              fill
              sizes="15vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 flex flex-1 flex-col justify-center px-6 pb-10 pt-8 sm:px-12 lg:order-2 lg:px-16 lg:py-20 xl:px-24">
          <p className="eyebrow max-w-md">{hero.eyebrow}</p>
          <h1 className="h-display mt-7 text-[2.4rem] sm:text-5xl lg:mt-14 lg:max-w-[18ch] lg:text-[3.6rem] xl:text-[4.1rem]">
            {hero.h1Pre}{" "}
            <span className="script text-[1.25em] leading-none">{hero.h1Script}</span>
            {hero.h1Post}
          </h1>
          <p className="body-copy mt-6 max-w-lg lg:mt-8">{hero.sub}</p>
          <div className="mt-8 lg:mt-10">
            <a href="#contact" className="link-underline">
              {hero.cta}
            </a>
          </div>
        </div>

        {/* Desktop right sliver image */}
        <div className="relative order-3 hidden w-[9%] self-end xl:mb-0 xl:block xl:h-[340px]">
          <Image
            src="/images/hero-office-side.webp"
            alt="Floor lamp, sofa and shelving in the quiet therapy room"
            fill
            sizes="9vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
