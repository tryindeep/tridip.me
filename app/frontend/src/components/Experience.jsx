import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { experience } from "../data";
import Section from "./Section";

export function ExperienceCard() {
  return <details className="experience-card">
    <summary className="experience-summary"><div className="company-logo">LT</div><div><div className="experience-title">{experience.company}</div><div className="experience-subtitle">{experience.role} · {experience.location}</div></div><time>{experience.period}</time><ChevronDown className="chevron" size={15} /></summary>
    <ul className="experience-bullets">{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
    <div className="experience-preview" aria-hidden="true">
      <div className="experience-preview-head"><div><b>{experience.company}</b><small>{experience.role} · {experience.location}</small></div><span>{experience.period}</span></div>
      <div className="impact-preview">
        <div className="impact-preview-title">Selected impact</div>
        <div className="impact-chart"><div className="impact-chart-labels"><span>Lighthouse performance</span><b>65 → 82</b></div><div className="impact-bars"><i /><i /></div></div>
        <div className="impact-metrics"><div><b>−21%</b><span>load time</span></div><div><b>−30%</b><span>API requests</span></div><div><b>10k+</b><span>daily users</span></div></div>
      </div>
    </div>
  </details>;
}

export default function Experience() {
  return <Section id="experience" title="Experiences" note="Work history" action={<Link className="section-action" to="/experience">View All <span>↗</span></Link>}>
    <div className="experience-list"><ExperienceCard /></div>
  </Section>;
}
