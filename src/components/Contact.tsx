"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

const field =
  "mt-2 w-full border border-primary/40 bg-white px-4 py-3 text-[0.95rem] text-ink focus:border-accent focus:outline-none";
const label = "text-[0.72rem] uppercase tracking-[0.16em] text-ink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-linen">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20 lg:py-28">
        <div>
          <h2 className="h-display text-4xl lg:text-[2.6rem]">
            {contact.heading}{" "}
            <span className="script text-[1.3em] leading-none">{contact.script}</span>
          </h2>
          <p className="body-copy mt-6">{contact.sub}</p>
        </div>

        {sent ? (
          <div role="status" className="self-start border border-secondary bg-white p-8">
            <p className="font-serif text-2xl text-primary">Thank you for reaching out.</p>
            <p className="body-copy mt-3">
              Your request has been noted. (Demo form: connect it to your email or booking
              provider before launch.)
            </p>
          </div>
        ) : (
          <form
            className="grid gap-6 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label htmlFor="name" className={label}>Name <span className="text-accent">*</span></label>
              <input id="name" name="name" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className={label}>Email <span className="text-accent">*</span></label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="format" className={label}>Preferred session format</label>
              <select id="format" name="format" className={field} defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>In-person in Santa Monica</option>
                <option>Telehealth (California)</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="msg" className={label}>What brings you to therapy?</label>
              <textarea id="msg" name="msg" rows={5} className={field} />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-solid">Request an appointment</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
