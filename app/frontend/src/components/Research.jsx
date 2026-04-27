import React from "react";
import { research } from "../data/mock";
import { SectionTitle } from "./About";
import { ArrowUpRight, FlaskConical } from "lucide-react";

const MetricCard = ({ value, label }) => (
  <div className="px-4 py-3 rounded-md border border-[#1C1A17]/12 bg-[#FBF8F2]">
    <div className="font-serif-display text-2xl text-[#B8541D] leading-none">
      {value}
    </div>
    <div className="mt-1.5 font-mono-tight text-[10px] uppercase tracking-[0.16em] text-[#1C1A17]/55">
      {label}
    </div>
  </div>
);

const Research = () => {
  return (
    <section id="research" className="py-20 border-t border-[#1C1A17]/10">
      <SectionTitle
        kicker="- Research"
        title="Applied deep learning for medical imaging."
      />

      {research.map((r, i) => (
        <article key={i} className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-11 w-11 rounded-md bg-[#B8541D]/10 items-center justify-center shrink-0">
              <FlaskConical size={20} className="text-[#B8541D]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif-display text-2xl text-[#1C1A17] leading-tight">
                {r.title}
              </h3>
              <p className="mt-1 font-mono-tight text-xs text-[#1C1A17]/55 tracking-wide">
                {r.venue} · {r.year}
              </p>
            </div>
            {r.paperUrl && (
              <a
                href={r.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#1C1A17]/12 bg-[#FBF8F2] text-sm text-[#1C1A17] hover:text-[#B8541D] hover:border-[#B8541D]/30 transition-colors"
              >
                {r.paperLabel || "Read paper"} <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#1C1A17]/85">
            {r.summary}
          </p>

          <div className="grid grid-cols-3 gap-3">
            <MetricCard value="99.14%" label="Accuracy" />
            <MetricCard value="96.94" label="Dice score" />
            <MetricCard value="99.11" label="Jaccard idx" />
          </div>

          <ul className="space-y-2.5">
            {r.highlights.map((h, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-[15px] leading-relaxed text-[#1C1A17]/80"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-[#1C1A17]/40 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {r.paperUrl && (
            <a
              href={r.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 text-sm text-[#1C1A17] hover:text-[#B8541D] transition-colors"
            >
              {r.paperLabel || "Read paper"} <ArrowUpRight size={14} />
            </a>
          )}
        </article>
      ))}
    </section>
  );
};

export default Research;
