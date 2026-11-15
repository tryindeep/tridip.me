import { ArrowUpRight, MapPin } from "lucide-react";
import { emailComposeUrl, profile } from "../data";

const ExternalLink = ({ href, children, subtle = false }) => <a className={subtle ? "text-link" : "button-link"} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={13} /></a>;

export default function Hero() {
  return <section className="hero" id="top">
    <div className="profile-row">
      <img className="profile-photo" src="/images/profile.jpg" alt={profile.name} />
      <div><h1>{profile.name}</h1><div className="profile-location"><MapPin size={13} />{profile.location}</div></div>
    </div>
    <p className="hero-intro">I’m a Software Engineer who builds reliable, high-performance applications across frontend and backend systems.</p>
    <p className="hero-copy">Previously at LTIMindtree, I shipped production modules for enterprise financial workflows used by 10,000+ people each day. My work improved application load time by 21%, reduced redundant API requests by 30%, and lowered integration defects by 40%. I’ve also co-authored research on medical image segmentation.</p>
    <div className="hero-primary-actions">
      <a className="primary-action" href={emailComposeUrl} target="_blank" rel="noreferrer">Send an email <ArrowUpRight size={13} /></a>
      <a className="secondary-action" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={13} /></a>
    </div>
    <div className="socials"><div className="socials-label">Here are my socials</div><div className="hero-actions">
      <ExternalLink href={profile.github}>GitHub</ExternalLink>
      <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
      <ExternalLink href={profile.x}>X / Twitter</ExternalLink>
    </div></div>
  </section>;
}
