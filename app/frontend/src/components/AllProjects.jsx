import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import IndexNav from "./IndexNav";
import { ProjectCard } from "./Projects";

export default function AllProjects({ theme, themeMode, onSetThemeMode, onToggleTheme }) {
  return <div className="layout-grid all-projects-layout">
    <div className="main-column">
      <Header theme={theme} themeMode={themeMode} onSetThemeMode={onSetThemeMode} onToggleTheme={onToggleTheme} />
      <main className="site-shell standalone-shell">
        <div className="all-experiences-topline"><Link to="/" aria-label="Back to portfolio"><ArrowLeft size={16} /></Link><div><h1>All Projects</h1><p>Selected software projects</p></div></div>
        <div id="projects" className="all-projects-grid"><ProjectCard /></div>
      </main>
    </div>
    <IndexNav />
  </div>;
}
