import { faqs } from "@/lib/content";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section id="faqs" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-20 lg:py-28">
        <h2 className="h-display text-4xl lg:text-[2.6rem]">
          {faqs.heading}
          <br />
          <span className="script text-[1.3em] leading-none">{faqs.script}</span>
        </h2>
        <Accordion
          variant="serif"
          items={faqs.items.map((f) => ({ title: f.q, body: f.a }))}
        />
      </div>
    </section>
  );
}
