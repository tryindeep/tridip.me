import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import IndexNav from "./components/IndexNav";
import AllExperiences from "./components/AllExperiences";
import AllProjects from "./components/AllProjects";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Activity, OpenSource } from "./components/Activity";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./styles.css";

function initialThemeMode() {
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "dark" || saved === "light" || saved === "system") return saved;
  return "system";
}

function readSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function playThemeSound(theme) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const notes = theme === "light" ? [587.33, 783.99] : [783.99, 587.33];
    notes.forEach((frequency, index) => {
      const start = context.currentTime + index * 0.055;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.035, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.19);
    });
    window.setTimeout(() => context.close(), 450);
  } catch { /* Audio is a small enhancement; theme switching still works without it. */ }
}

function Home({ theme, themeMode, setMode, toggleTheme }) {
  return <div className="layout-grid">
    <div className="main-column">
      <Banner />
      <Header theme={theme} themeMode={themeMode} onSetThemeMode={setMode} onToggleTheme={toggleTheme} />
      <main className="site-shell">
        <Hero />
        <Experience />
        <Projects />
        <Activity />
        <OpenSource />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>
    </div>
    <IndexNav />
  </div>;
}

export default function App() {
  const [themeMode, setThemeMode] = useState(initialThemeMode);
  const [systemTheme, setSystemTheme] = useState(readSystemTheme);
  const themeTransitionRef = useRef(0);
  const theme = themeMode === "system" ? systemTheme : themeMode;
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);
  const setMode = (mode, originElement) => {
    const nextTheme = mode === "system" ? systemTheme : mode;
    const applyTheme = () => {
      setThemeMode(mode);
      window.localStorage.setItem("portfolio-theme", mode);
      if (nextTheme !== theme) playThemeSound(nextTheme);
    };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (nextTheme !== theme && !reduceMotion && typeof document.startViewTransition === "function") {
      const bounds = originElement?.getBoundingClientRect();
      const x = bounds ? bounds.left + bounds.width / 2 : window.innerWidth / 2;
      const y = bounds ? bounds.top + bounds.height / 2 : window.innerHeight / 2;
      document.documentElement.style.setProperty("--theme-origin-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-origin-y", `${y}px`);
      const transitionId = ++themeTransitionRef.current;
      const clearOrigin = () => {
        if (themeTransitionRef.current !== transitionId) return;
        document.documentElement.style.removeProperty("--theme-origin-x");
        document.documentElement.style.removeProperty("--theme-origin-y");
      };
      try {
        const transition = document.startViewTransition(() => flushSync(applyTheme));
        transition.finished.then(clearOrigin, clearOrigin);
      } catch {
        clearOrigin();
        applyTheme();
      }
    } else applyTheme();
  };
  const toggleTheme = (originElement) => {
    setMode(theme === "dark" ? "light" : "dark", originElement);
  };
  return <BrowserRouter><div className="portfolio" data-theme={theme}>
    <Routes>
      <Route path="/" element={<Home theme={theme} themeMode={themeMode} setMode={setMode} toggleTheme={toggleTheme} />} />
      <Route path="/experience" element={<AllExperiences theme={theme} themeMode={themeMode} onSetThemeMode={setMode} onToggleTheme={toggleTheme} />} />
      <Route path="/projects" element={<AllProjects theme={theme} themeMode={themeMode} onSetThemeMode={setMode} onToggleTheme={toggleTheme} />} />
      <Route path="*" element={<Home theme={theme} themeMode={themeMode} setMode={setMode} toggleTheme={toggleTheme} />} />
    </Routes>
  </div></BrowserRouter>;
}
