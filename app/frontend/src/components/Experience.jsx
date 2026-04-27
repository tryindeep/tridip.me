import React from "react";
import { experience } from "../data/mock";
import { SectionTitle } from "./About";

const Experience = () => {
  return (
    <section id="work" className="py-20 border-t border-[#1C1A17]/10">
      <SectionTitle kicker="- Work" title="Where I've been building." />

      <ol className="relative space-y-10">
        {experience.map((job, idx) => (
          <li key={idx} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h3 className="font-serif-display text-2xl text-[#1C1A17]">
                {job.role} <span className="text-[#1C1A17]/50">at</span>{" "}
                <span className="text-[#B8541D]">{job.company}</span>
              </h3>
              <span className="font-mono-tight text-xs text-[#1C1A17]/55 tracking-wide">
                {job.period}
              </span>
            </div>
            <p className="font-mono-tight text-[11px] uppercase tracking-[0.18em] text-[#1C1A17]/45 mb-4">
              {job.location}
            </p>
            <ul className="space-y-2.5">
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[15px] leading-relaxed text-[#1C1A17]/80"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-[#1C1A17]/40 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
