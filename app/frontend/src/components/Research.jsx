import { ArrowUpRight, BookOpen } from "lucide-react";
import { publication } from "../data";
import Section from "./Section";

export default function Research() {
  return <Section id="research" title="Research Publication" note={publication.venue}>
    <article className="publication-card"><div className="publication-icon"><BookOpen size={18} /></div><div className="publication-content"><h3>{publication.title}</h3><p>{publication.summary}</p><div className="publication-bottom"><span>{publication.result}</span><a href={publication.link} target="_blank" rel="noreferrer">Read paper<ArrowUpRight size={13} /></a></div></div></article>
  </Section>;
}
