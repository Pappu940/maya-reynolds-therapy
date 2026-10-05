import Image from "next/image";
import { welcome } from "@/lib/content";

export default function Welcome() {
  return (
    <section id="welcome" className="bg-linen lg:bg-secondary/40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 pb-20 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)_minmax(0,1fr)] lg:gap-16 lg:py-28">
        {/* Left image (desktop only) */}
        <div className="relative hidden aspect-[4/5] w-full max-w-[380px] justify-self-end lg:block">
          <Image
            src="/images/welcome-office-table.webp"
            alt="Glass coffee table and soft rug in the calm Santa Monica therapy office"
            fill
            sizes="(min-width: 1024px) 380px, 0px"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="h-display text-[2.1rem] sm:text-4xl lg:text-[2.6rem]">{welcome.heading}</h2>
          <p className="eyebrow mt-5 max-w-sm">{welcome.eyebrow}</p>

          <p className="body-copy mt-6">{welcome.body[0]}</p>

          {/* Mobile: wide thin image strip between the paragraphs, as on the template */}
          <div className="relative my-8 h-[120px] w-full sm:h-[180px] lg:hidden">
            <Image
              src="/images/welcome-office-shelf.webp"
              alt="Bookshelf with books, plants and framed photos in a calm counseling room"
              fill
              sizes="100vw"
              className="object-cover object-[50%_40%]"
            />
          </div>

          <p className="body-copy mt-5">{welcome.body[1]}</p>
          <div className="mt-9">
            <a href="#contact" className="btn-pill">
              {welcome.cta}
            </a>
          </div>
        </div>

        {/* Right image (desktop only) */}
        <div className="relative hidden aspect-[4/5] w-full max-w-[380px] justify-self-start lg:block">
          <Image
            src="/images/welcome-office-shelf.webp"
            alt="Bookshelf with books, plants and framed photos in a calm counseling room"
            fill
            sizes="(min-width: 1024px) 380px, 0px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
