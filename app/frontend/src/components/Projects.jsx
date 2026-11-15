import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { project } from "../data";
import Section from "./Section";

export function ProjectCard() {
  return <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <div className="project-rays" />
        <div className="booking-preview">
          <div className="preview-toolbar"><span className="preview-brand"><i /> RESERVEIT</span><span>BOOK TICKETS</span><span className="preview-avatar">TP</span></div>
          <div className="preview-content">
            <div className="preview-main"><div className="preview-eyebrow">SEAT RESERVATION</div><div className="preview-title">Choose your seats</div><div className="preview-subtitle">Movie · Showtime · Theater</div><div className="seat-map">{Array.from({ length: 32 }, (_, index) => <i className={[5, 6, 13, 14, 21].includes(index) ? "seat selected" : "seat"} key={index} />)}</div></div>
            <div className="preview-side"><span>SEAT SUMMARY</span><b>Your selected seats</b><small>Five-minute hold</small><button>Continue to payment</button></div>
          </div>
        </div>
      </div>
      <div className="project-header"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div><span className="live-badge"><i />Live</span></div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-highlights">{project.details.map(([label, text]) => <div className="project-highlight" key={label}><span>{label}</span><p>{text}</p></div>)}</div>
      <div className="project-footer"><div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={14} />Source</a><a href={project.live} target="_blank" rel="noreferrer">Live demo<ArrowUpRight size={13} /></a></div></div>
    </article>;
}

export default function Projects() {
  return <Section id="projects" title="Projects" note="Selected work" action={<Link className="section-action" to="/projects">View All <span>↗</span></Link>}>
    <div className="project-grid"><ProjectCard /></div>
  </Section>;
}
