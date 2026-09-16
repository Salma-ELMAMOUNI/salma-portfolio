import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl">Skills</h2>
        </Reveal>
        <dl className="grid grid-cols-2 gap-7 sm:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 0.05}>
              <div>
                <dt className="mb-2 font-mono text-xs text-muted uppercase">{s.category}</dt>
                <dd className="text-[0.92rem] leading-relaxed">{s.items}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
