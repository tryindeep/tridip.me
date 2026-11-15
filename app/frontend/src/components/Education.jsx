import { education } from "../data";
import Section from "./Section";

export default function Education() {
  return <Section id="education" title="Education">
    <article className="education-card"><div className="education-monogram">IEM</div><div className="education-main"><h3>{education.institution}</h3><p>{education.degree}</p><span>{education.location} · {education.result}</span></div><time>{education.period}</time></article>
  </Section>;
}
