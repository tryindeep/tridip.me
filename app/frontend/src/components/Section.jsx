export default function Section({ id, title, note, action, children }) {
  return <section id={id} className="section">
    <div className="section-heading"><h2>{title}</h2><div className="section-heading-meta">{note && <span>{note}</span>}{action}</div></div>
    {children}
  </section>;
}
