import React from "react";
import { skills, interests, achievements } from "../data/mock";
import { SectionTitle } from "./About";
import { Award, Compass } from "lucide-react";

const Skills = () => {
  return (
    <section className="py-20 border-t border-[#1C1A17]/10">
      <SectionTitle kicker="- Toolkit" title="Things I work with." />

      <div className="space-y-5">
        {skills.map((g) => (
          <div
            key={g.group}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-3 border-b border-dashed border-[#1C1A17]/10 last:border-0"
          >
            <div className="font-mono-tight text-[11px] uppercase tracking-[0.18em] text-[#1C1A17]/55 pt-1">
              {g.group}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-[13px] px-3 py-1 rounded-full bg-[#FBF8F2] border border-[#1C1A17]/12 text-[#1C1A17]/85 hover:bg-[#1C1A17] hover:text-[#F5F0E8] hover:border-[#1C1A17] transition-colors duration-200"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={16} className="text-[#B8541D]" />
            <h3 className="font-serif-display text-xl text-[#1C1A17]">
              Achievements
            </h3>
          </div>
          <ul className="space-y-2.5">
            {achievements.map((a, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14.5px] leading-relaxed text-[#1C1A17]/80"
              >
                <span className="font-mono-tight text-[#B8541D] text-xs mt-1">
                  +
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Compass size={16} className="text-[#B8541D]" />
            <h3 className="font-serif-display text-xl text-[#1C1A17]">
              Currently learning
            </h3>
          </div>
          <ul className="space-y-2.5">
            {interests.map((it, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14.5px] leading-relaxed text-[#1C1A17]/80"
              >
                <span className="font-mono-tight text-[#1C1A17]/40 text-xs mt-1">
                  -&gt;
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
