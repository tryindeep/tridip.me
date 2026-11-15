import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { emailComposeUrl, profile } from "../data";
import Section from "./Section";

const links = [
  ["Email", emailComposeUrl, Mail],
  ["GitHub", profile.github, Github],
  ["LinkedIn", profile.linkedin, Linkedin],
  ["X / Twitter", profile.x, Twitter],
];

export default function Contact() {
  return <>
    <Section id="contact" title="Get in touch" note="Contact">
      <p className="contact-copy">For conversations about software engineering, backend systems, or applied machine learning, reach out.</p>
      <div className="contact-grid">{links.map(([label, href, Icon]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span><Icon size={16} />{label}</span><ArrowUpRight size={14} /></a>)}</div>
    </Section>
    <footer className="footer"><span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
