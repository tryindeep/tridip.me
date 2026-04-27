import React from "react";
import { projects } from "../data/mock";
import { SectionTitle } from "./About";
import { Sparkles, Github } from "lucide-react";

const StatusPill = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono-tight uppercase tracking-[0.15em] bg-[#B8541D]/10 text-[#B8541D] border border-[#B8541D]/20">
    <span className="h-1.5 w-1.5 rounded-full bg-[#B8541D] animate-pulse" />
    {children}
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-[#1C1A17]/10">
      <SectionTitle kicker="- Project" title="A current exploration." />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <article
            key={i}
            className="group relative rounded-xl border border-[#1C1A17]/12 bg-[#FBF8F2] hover:bg-[#FDFAF4] transition-colors duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8541D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif-display text-3xl text-[#1C1A17]">
                      {p.title}
                    </h3>
                    <StatusPill>{p.status}</StatusPill>
                  </div>
                  <p className="font-mono-tight text-xs text-[#1C1A17]/50">
                    {p.year}
                  </p>
                </div>
                <Sparkles
                  size={20}
                  className="text-[#B8541D]/70 shrink-0 mt-2 group-hover:rotate-12 transition-transform duration-300"
                />
              </div>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#1C1A17]/85 mb-5">
                {p.summary}
              </p>

              <ul className="space-y-2 mb-6">
                {p.details.map((d, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-[#1C1A17]/75"
                  >
                    <span className="text-[#B8541D] font-mono-tight text-xs mt-1.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#1C1A17]/10">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono-tight text-[11px] px-2.5 py-1 rounded border border-[#1C1A17]/15 text-[#1C1A17]/70"
                  >
                    {s}
                  </span>
                ))}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm text-[#1C1A17] hover:text-[#B8541D] transition-colors"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
