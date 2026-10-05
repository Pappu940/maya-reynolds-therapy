import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import QuoteBand from "@/components/QuoteBand";
import Expertise from "@/components/Expertise";
import Methods from "@/components/Methods";
import Office from "@/components/Office";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faqs, site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "LocalBusiness"],
  name: site.name,
  description: site.description,
  image: "/images/maya-reynolds.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: ["Santa Monica, CA", "California"],
  medicalSpecialty: "Psychology",
  knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism"],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
      />
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <QuoteBand />
        <Expertise />
        <Methods />
        <Office />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
