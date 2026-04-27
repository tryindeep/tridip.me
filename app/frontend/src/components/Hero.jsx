import React from "react";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile, research } from "../data/mock";

const HeroAction = ({ href, label, primary = false }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    className={
      primary
        ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#1C1A17] text-[#F5F0E8] hover:bg-[#B8541D] transition-colors duration-300"
        : "inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#1C1A17]/12 bg-[#FBF8F2] text-[#1C1A17] hover:text-[#B8541D] hover:border-[#B8541D]/30 transition-colors duration-300"
    }
  >
    <span className="text-sm">{label}</span>
    <ArrowUpRight size={14} />
  </a>
);

const Hero = () => {
  const paper = research[0];

  return (
    <section id="top" className="pt-16 sm:pt-24 pb-20">
      <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-8 fade-up">
        <div className="flex-1">
          <p className="font-mono-tight text-xs uppercase tracking-[0.2em] text-[#1C1A17]/50 mb-6">
            Portfolio · 2025
          </p>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-[#1C1A17]">
            {profile.name}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#1C1A17]/75 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#1C1A17]/60">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-[#B8541D]" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#1C1A17]/30 hidden sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Open to work
            </span>
            <span className="h-1 w-1 rounded-full bg-[#1C1A17]/30 hidden sm:inline-block" />
            <span>Open source focused</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <HeroAction href={profile.links.github} label="GitHub" primary />
            <HeroAction href={profile.links.linkedin} label="LinkedIn" />
            {paper.paperUrl && (
              <HeroAction href={paper.paperUrl} label={paper.paperLabel || "Research Paper"} />
            )}
            {profile.resumeUrl && (
              <HeroAction href={profile.resumeUrl} label="Resume" />
            )}
          </div>

          <div className="mt-5 flex items-center gap-4 text-sm text-[#1C1A17]/60">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#B8541D] transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#B8541D] transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
