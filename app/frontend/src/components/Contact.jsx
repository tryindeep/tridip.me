import React, { useState } from "react";
import { profile, research } from "../data/mock";
import { SectionTitle } from "./About";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  FlaskConical,
} from "lucide-react";
import { toast } from "sonner";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center justify-between p-4 rounded-lg border border-[#1C1A17]/12 bg-[#FBF8F2] hover:bg-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-300"
  >
    <div className="flex items-center gap-3">
      <Icon
        size={18}
        className="text-[#1C1A17]/70 group-hover:text-[#F5F0E8] transition-colors"
      />
      <span className="text-sm text-[#1C1A17] group-hover:text-[#F5F0E8] transition-colors">
        {label}
      </span>
    </div>
    <ArrowUpRight
      size={16}
      className="text-[#1C1A17]/40 group-hover:text-[#B8541D] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
    />
  </a>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const paper = research[0];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      toast.error("Couldn't copy. Try selecting the email manually.");
    }
  };

  const year = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 border-t border-[#1C1A17]/10">
      <SectionTitle kicker="- Contact" title="Let's talk.">
        <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#1C1A17]/75 max-w-xl">
          Open to MLH Fellowship, collaborative open-source programs, and
          software engineering opportunities. The fastest way to reach me is
          email.
        </p>
      </SectionTitle>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-3 px-4 py-3 rounded-md bg-[#1C1A17] text-[#F5F0E8] hover:bg-[#B8541D] transition-colors duration-300"
        >
          <Mail size={16} />
          <span className="text-sm">{profile.email}</span>
          <span className="ml-1 opacity-60 group-hover:opacity-100">
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </span>
        </button>

        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-[#1C1A17]/12 bg-[#FBF8F2] text-[#1C1A17] hover:text-[#B8541D] hover:border-[#B8541D]/30 transition-colors duration-300"
          >
            <FileText size={16} />
            <span className="text-sm">Resume</span>
          </a>
        )}

        {paper.paperUrl && (
          <a
            href={paper.paperUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-[#1C1A17]/12 bg-[#FBF8F2] text-[#1C1A17] hover:text-[#B8541D] hover:border-[#B8541D]/30 transition-colors duration-300"
          >
            <FlaskConical size={16} />
            <span className="text-sm">{paper.paperLabel || "Research Paper"}</span>
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <SocialLink href={profile.links.github} icon={Github} label="GitHub" />
        <SocialLink
          href={profile.links.linkedin}
          icon={Linkedin}
          label="LinkedIn"
        />
        <SocialLink
          href={profile.links.twitter}
          icon={Twitter}
          label="Twitter / X"
        />
      </div>

      <footer className="mt-24 pt-8 border-t border-[#1C1A17]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono-tight text-xs text-[#1C1A17]/55">
          Copyright {year} Tridip Pramanick. Crafted in Kolkata
          <span className="text-[#B8541D]"> • </span>
          Built with React & Tailwind.
        </p>
        <a
          href="#top"
          className="font-mono-tight text-xs text-[#1C1A17]/60 hover:text-[#B8541D] transition-colors inline-flex items-center gap-1"
        >
          Back to top <ArrowUpRight size={12} />
        </a>
      </footer>
    </section>
  );
};

export default Contact;
