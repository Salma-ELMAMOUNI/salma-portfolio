"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    window.location.href = `mailto:${profile.email}?subject=Contact depuis le portfolio&body=${encodeURIComponent(
      message
    )}`;
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl">Contact</h2>
        </Reveal>
        <Reveal delay={0.08}>
        <div className="grid gap-12 sm:grid-cols-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="border-b border-line bg-transparent py-2 text-[0.95rem] focus:border-signal focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="border-b border-line bg-transparent py-2 text-[0.95rem] focus:border-signal focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={3}
              className="border-b border-line bg-transparent py-2 text-[0.95rem] focus:border-signal focus:outline-none"
            />
            <button
              type="submit"
              className="w-fit border border-ink bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-signal hover:border-signal"
            >
              Submit
            </button>
          </form>
          <div>
            
            <a
              href={`mailto:${profile.email}`}
              className="mb-2 block text-[0.95rem] underline decoration-line underline-offset-2 hover:text-signal hover:decoration-signal"
            >
              {profile.email}
            </a>
            <p className="mb-2 text-[0.95rem] text-muted">{profile.phone}</p>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                className="mb-2 block text-[0.95rem] underline decoration-line underline-offset-2 hover:text-signal hover:decoration-signal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
