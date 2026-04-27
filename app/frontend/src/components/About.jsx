import React from "react";
import { ArrowUpRight } from "lucide-react";
import { now, profile } from "../data/mock";

const SectionTitle = ({ kicker, title, children }) => (
  <div className="mb-8">
    <p className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-[#1C1A17]/50 mb-2">
      {kicker}
    </p>
    <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C1A17]">
      {title}
    </h2>
    {children}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-[#1C1A17]/10">
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-10 items-start">
        <div className="shrink-0">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <div className="absolute inset-0 rounded-full bg-[#B8541D]/15 blur-xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-full h-full rounded-full object-cover ring-1 ring-[#1C1A17]/15 shadow-[0_8px_30px_rgba(28,26,23,0.08)]"
            />
          </div>
        </div>
        <div>
          <SectionTitle kicker="- About" title="A short introduction." />
          <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#1C1A17]/85">
            {profile.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-[#1C1A17]/10">
            <p className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-[#1C1A17]/50 mb-4">
              - Currently
            </p>
            <ul className="space-y-2.5">
              {now.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[#1C1A17]/80"
                >
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-[#B8541D]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
export { SectionTitle };
