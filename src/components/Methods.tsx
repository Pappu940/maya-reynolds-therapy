import { methods } from "@/lib/content";
import Accordion from "./Accordion";

export default function Methods() {
  return (
    <section id="methods" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-20 lg:py-28">
        <h2 className="h-display text-4xl lg:text-[2.6rem]">
          {methods.heading}
          <br />
          <span className="script text-[1.3em] leading-none">{methods.script}</span>{" "}
          {methods.headingPost}
        </h2>
        <Accordion items={methods.items} variant="caps" />
      </div>
    </section>
  );
}
