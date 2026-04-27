import React, { useEffect, useState } from "react";
import { navLinks, profile } from "../data/mock";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 sm:px-6 pt-4">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F0E8]/92 backdrop-blur-xl border border-[#1C1A17]/10 shadow-[0_10px_30px_rgba(28,26,23,0.06)]"
            : "bg-[#F5F0E8]/72 backdrop-blur-md border border-[#1C1A17]/8"
        }`}
      >
        <div className="px-5 sm:px-6 lg:px-7 h-[72px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className="group min-w-0 flex items-center gap-3 text-[#1C1A17]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8541D]/20 bg-[#B8541D]/10 font-mono-tight text-xs uppercase tracking-[0.22em] text-[#B8541D] transition-colors group-hover:bg-[#B8541D] group-hover:text-[#F5F0E8]">
              TP
            </span>
            <span className="min-w-0">
              <span className="block font-serif-display text-[28px] leading-none tracking-[-0.03em] group-hover:text-[#B8541D] transition-colors">
                {profile.shortName}.
              </span>
              <span className="hidden sm:block mt-1 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-[#1C1A17]/45">
                Software & AI
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-[#1C1A17]/10 bg-[#FBF8F2]/85 px-2 py-2 shadow-[0_2px_10px_rgba(28,26,23,0.03)]">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] text-[#1C1A17]/68 hover:bg-[#1C1A17] hover:text-[#F5F0E8] transition-colors duration-250"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1A17]/10 bg-[#FBF8F2] text-[#1C1A17]"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#1C1A17]/10 px-5 pb-5">
            <nav className="pt-4 flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#1C1A17]/80 hover:bg-[#1C1A17] hover:text-[#F5F0E8] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
