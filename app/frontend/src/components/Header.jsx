import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown, ArrowUp, ArrowUpRight, BookOpen, Briefcase, Check, Code2,
  CornerDownLeft, Copy, FileText, Github, GraduationCap, LayoutGrid, Link2,
  Mail, Moon, Monitor, Search, Sun, X,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { profile } from "../data";

const commands = [
  { label: "Experience", group: "Sections", icon: Briefcase, href: "#experience", shortcut: "shift + E", hotkey: "e" },
  { label: "Projects", group: "Sections", icon: Code2, href: "#projects", shortcut: "shift + P", hotkey: "p" },
  { label: "Blogs", group: "Sections", icon: FileText, href: "#research", keywords: "research publications", shortcut: "shift + B", hotkey: "b" },
  { label: "Open Source", group: "Sections", icon: Github, href: "#open-source", shortcut: "shift + 0", hotkey: "0" },
  { label: "Skills", group: "Sections", icon: BookOpen, href: "#skills", shortcut: "shift + S", hotkey: "s" },
  { label: "Education", group: "Sections", icon: GraduationCap, href: "#education" },
  { label: "Contact", group: "Sections", icon: Mail, href: "#contact" },
  { label: "Copy Link", group: "General", icon: Copy, action: "copy", shortcut: "shift + C", hotkey: "c" },
  { label: "Light Mode", group: "Theme", icon: Sun, action: "theme", value: "light", shortcut: "shift + T", hotkey: "t" },
  { label: "Dark Mode", group: "Theme", icon: Moon, action: "theme", value: "dark", shortcut: "shift + D", hotkey: "d" },
  { label: "System", group: "Theme", icon: Monitor, action: "theme", value: "system", shortcut: "shift + Y", hotkey: "y" },
  { label: "All Experiences", group: "Pages", icon: Briefcase, href: "/experience" },
  { label: "All Projects", group: "Pages", icon: Code2, href: "/projects" },
  { label: "Back to Portfolio", group: "Pages", icon: Link2, href: "/" },
  { label: "GitHub Profile", group: "Profiles", icon: Github, href: profile.github },
  { label: "LinkedIn Profile", group: "Profiles", icon: Link2, href: profile.linkedin },
];

function isEditableTarget(target) {
  return target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
}

export default function Header({ theme, themeMode, onSetThemeMode, onToggleTheme }) {
  const routeTo = useNavigate();
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const searchRef = useRef(null);
  const triggerRef = useRef(null);
  const wasOpenRef = useRef(false);
  const itemRefs = useRef([]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return commands;
    return commands.filter((item) => `${item.label} ${item.group} ${item.keywords || ""}`.toLowerCase().includes(normalizedQuery));
  }, [query]);
  const groupedResults = useMemo(() => results.reduce((groups, item, index) => {
    (groups[item.group] ||= []).push({ ...item, resultIndex: index });
    return groups;
  }, {}), [results]);

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).format(new Date()));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setQuery("");
  };

  const runCommand = async (command, originElement) => {
    if (command.action === "theme") {
      onSetThemeMode(command.value, originElement);
      closeMenu();
      return;
    }
    if (command.action === "copy") {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copiedSuccessfully = document.execCommand("copy");
        textarea.remove();
        if (!copiedSuccessfully) return;
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
      return;
    }

    closeMenu();
    if (command.href.startsWith("#")) {
      const target = document.querySelector(command.href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      else {
        routeTo(`/${command.href}`);
        window.setTimeout(() => document.querySelector(command.href)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
    } else if (command.href.startsWith("/")) routeTo(command.href);
    else window.open(command.href, "_blank", "noopener,noreferrer");
  };

  const runCommandRef = useRef(runCommand);
  runCommandRef.current = runCommand;

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((wasOpen) => !wasOpen);
        setQuery("");
        setActiveIndex(0);
        return;
      }
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
        return;
      }
      if (open || !event.shiftKey || event.metaKey || event.ctrlKey || event.altKey || isEditableTarget(event.target)) return;
      const key = event.code === "Digit0" ? "0" : event.key.toLowerCase();
      const command = commands.find((item) => item.hotkey === key);
      if (command) {
        event.preventDefault();
        runCommandRef.current(command);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => searchRef.current?.focus());
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  useEffect(() => {
    if (wasOpenRef.current && !open) triggerRef.current?.focus();
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (open && results.length) itemRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open, results.length]);

  const openMenu = () => {
    setOpen(true);
    setQuery("");
    setActiveIndex(0);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!results.length) return;
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => (current + direction + results.length) % results.length);
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      runCommand(results[activeIndex]);
    }
  };

  const trapMenuTab = (event) => {
    if (event.key !== "Tab") return;
    const focusables = [...event.currentTarget.querySelectorAll("button, input")].filter((element) => !element.disabled);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return <>
    <header className="topbar">
      <div className="topbar-location"><span className="status-dot" />{profile.location}<span className="topbar-divider">·</span>{time}</div>
      <div className="topbar-actions">
        <button ref={triggerRef} className="palette-trigger" onClick={openMenu} aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={open}>
          <Search size={13} /><span>Command Palette</span><kbd>⌘ K</kbd>
        </button>
        <button className="theme-trigger" data-theme={theme} onClick={(event) => onToggleTheme(event.currentTarget)} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          <span className="theme-icon-stack" aria-hidden="true"><Sun className="theme-icon-sun" size={17} /><Moon className="theme-icon-moon" size={16} /></span>
        </button>
      </div>
    </header>
    {open && createPortal(<div className="palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeMenu(); }}>
      <section className="palette" role="dialog" aria-modal="true" aria-labelledby="palette-heading" aria-describedby="palette-description" onKeyDown={trapMenuTab}>
        <div className="palette-title">
          <div className="palette-heading">
            <span className="palette-mark"><LayoutGrid size={19} /></span>
            <span className="palette-copy"><strong id="palette-heading">Navigation Menu</strong><small id="palette-description">Quickly jump to sections or actions</small></span>
          </div>
          <button className="palette-close" type="button" onClick={closeMenu} aria-label="Close navigation menu"><X size={17} /></button>
        </div>
        <div className="palette-search"><Search size={17} /><input ref={searchRef} autoFocus value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }} onKeyDown={handleSearchKeyDown} placeholder="Search for actions..." aria-label="Search navigation menu" aria-controls="palette-results" aria-activedescendant={results[activeIndex] ? `palette-option-${activeIndex}` : undefined} /></div>
        <div className="palette-results" id="palette-results" role="listbox" aria-label="Navigation and actions">
          {Object.entries(groupedResults).map(([group, items]) => <div className="palette-group" key={group} role="group" aria-label={group}>
            <div className="palette-group-label">{group}</div>
            {items.map((item) => {
              const Icon = item.icon;
              const selected = activeIndex === item.resultIndex;
              return <button
                ref={(element) => { itemRefs.current[item.resultIndex] = element; }}
                id={`palette-option-${item.resultIndex}`}
                key={item.label}
                type="button"
                role="option"
                aria-selected={selected}
                aria-pressed={item.action === "theme" ? themeMode === item.value : undefined}
                className={`palette-item${selected ? " active" : ""}`}
                onMouseEnter={() => setActiveIndex(item.resultIndex)}
                onClick={(event) => runCommand(item, event.currentTarget)}
              >
                <span className="palette-item-label"><Icon size={16} /><span>{item.label}</span></span>
                {item.action === "theme" && themeMode === item.value
                  ? <Check className="palette-item-check" size={16} />
                  : item.shortcut
                    ? <kbd className="palette-shortcut">{item.shortcut}</kbd>
                    : item.href?.startsWith("/")
                      ? <ArrowUpRight className="palette-item-arrow" size={15} />
                      : null}
              </button>;
            })}
          </div>)}
          {!results.length && <p className="palette-empty">No matching sections or actions</p>}
        </div>
        <div className="palette-footer">
          <div className="palette-footer-hints"><span><ArrowUp size={13} /><ArrowDown size={13} /> to navigate</span><span><CornerDownLeft size={13} /> to select</span></div>
          <span className="palette-footer-status">{copied ? "Link copied" : "esc to close"}</span>
        </div>
      </section>
    </div>, document.querySelector(".portfolio") || document.body)}
  </>;
}
