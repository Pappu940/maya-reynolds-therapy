import Image from "next/image";
import { quote } from "@/lib/content";

export default function QuoteBand() {
  return (
    <section aria-label="A note from Dr. Reynolds" className="relative isolate overflow-hidden">
      <Image
        src="/images/pacific-dusk.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/65 via-primary-deep/20 to-transparent" />
      <div className="mx-auto flex min-h-[380px] max-w-[1200px] items-end px-6 py-16 lg:min-h-[480px] lg:py-20">
        <p className="font-serif text-3xl leading-tight text-white [text-shadow:0_1px_18px_rgba(15,28,38,0.55)] sm:text-4xl lg:max-w-[22ch] lg:text-[2.8rem]">
          {quote.text}{" "}
          <span className="font-script text-[1.3em] leading-none text-[#f1cdb2]">
            {quote.script}
          </span>
        </p>
      </div>
    </section>
  );
}
