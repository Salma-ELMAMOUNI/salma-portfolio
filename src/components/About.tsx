import { profile } from "@/lib/data";
import Reveal from "./Reveal";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const creds = [
  { label: "Formation", value: profile.education },
  { label: "Localisation", value: profile.location },
  { label: "Disponibilité", value: profile.availability },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl">About</h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-[220px_1.3fr_1fr]">
          
          {/* PHOTO */}
          <Reveal delay={0.03}>
            <div className="flex justify-center sm:justify-start">
              <div className="overflow-hidden rounded-xl border border-line">
 <img
  src={`${basePath}/profile.jpeg`}
  alt="Salma El Mamouni"
  className="h-[280px] w-[220px] object-cover"
/>
              </div>
            </div>
          </Reveal>

          {/* ABOUT TEXT */}
          <Reveal delay={0.05}>
            <div className="space-y-4">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* CREDENTIALS */}
          <Reveal delay={0.12}>
            <dl>
              {creds.map((c) => (
                <div
                  key={c.label}
                  className="border-t border-line py-3 first:border-t-0 sm:first:border-t"
                >
                  <dt className="font-mono text-xs uppercase text-muted">
                    {c.label}
                  </dt>

                  <dd className="mt-1 text-[0.95rem]">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
