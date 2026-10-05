import Logo from "./Logo";
import { footer, site } from "@/lib/content";

const h = "text-[0.7rem] uppercase tracking-[0.18em] text-white";
const a = "block py-1 text-[0.9rem] text-secondary hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-[0.92rem] leading-relaxed text-secondary">
            {footer.blurb}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className={h}>Navigate</h2>
          <div className="mt-4">
            <a className={a} href="#about">About</a>
            <a className={a} href="#methods">Methods</a>
            <a className={a} href="#office">Our Office</a>
            <a className={a} href="#faqs">FAQs</a>
            <a className={a} href="#contact">Contact</a>
          </div>
        </nav>

        <div>
          <h2 className={h}>Specialties</h2>
          <ul className="mt-4 text-[0.9rem] leading-8 text-secondary">
            <li>Anxiety &amp; panic</li>
            <li>Trauma &amp; EMDR</li>
            <li>Burnout &amp; perfectionism</li>
          </ul>
        </div>

        <address className="not-italic">
          <h2 className={h}>Visit</h2>
          <p className="mt-4 text-[0.9rem] leading-8 text-secondary">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
          <p className="mt-4 text-[0.9rem] leading-relaxed text-secondary">
            Serving Santa Monica in person and clients across California by secure telehealth.
          </p>
        </address>
      </div>

      <div className="bg-primary-deep">
        <div className="mx-auto max-w-[1200px] px-6 py-6 text-[0.78rem] leading-relaxed text-secondary">
          <p>{footer.crisis}</p>
          <p className="mt-2">© 2026 {site.name}. Licensed clinical psychologist, Santa Monica, CA.</p>
        </div>
      </div>
    </footer>
  );
}
