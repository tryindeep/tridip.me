import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ExperienceCard } from "./Experience";
import Header from "./Header";

export default function AllExperiences({ theme, themeMode, onSetThemeMode, onToggleTheme }) {
  return <div className="layout-grid all-experiences-layout">
    <div className="main-column">
      <Header theme={theme} themeMode={themeMode} onSetThemeMode={onSetThemeMode} onToggleTheme={onToggleTheme} />
      <main className="site-shell standalone-shell">
        <div className="all-experiences-topline"><Link to="/" aria-label="Back to portfolio"><ArrowLeft size={16} /></Link><div><h1>All Experiences</h1><p>Professional experience</p></div></div>
        <div id="experience" className="experience-list all-experience-list"><ExperienceCard /></div>
      </main>
    </div>
  </div>;
}
