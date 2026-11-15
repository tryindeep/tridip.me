import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  ["Experience", "experience"], ["Projects", "projects"],
  ["Open Source", "open-source"], ["Skills", "skills"],
  ["Research", "research"], ["Education", "education"], ["Contact", "contact"],
];

export default function IndexNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("experience");
  const [indicator, setIndicator] = useState(null);
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname === "/projects" ? "projects" : "experience");
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: [0, 0.2, 0.5, 1] });
    items.forEach(([, id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [location.pathname]);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const link = itemRefs.current[active];
    if (!nav || !link) return undefined;
    const measure = () => {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicator({
        x: linkRect.left - navRect.left,
        y: linkRect.top - navRect.top,
        width: linkRect.width,
        height: linkRect.height,
      });
    };
    measure();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    observer?.observe(nav);
    observer?.observe(link);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active, location.pathname]);

  const goTo = (event, id) => {
    if (location.pathname === "/") return;
    event.preventDefault();
    navigate(`/#${id}`);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return <aside className="index-nav">
    <div className="index-label">INDEX</div>
    <nav ref={navRef}>
      {indicator && <span className="index-indicator" aria-hidden="true" style={{ width: `${indicator.width}px`, height: `${indicator.height}px`, transform: `translate(${indicator.x}px, ${indicator.y}px)` }} />}
      {items.map(([label, id]) => <a ref={(element) => { itemRefs.current[id] = element; }} key={id} className={active === id ? "active" : ""} href={location.pathname === "/" ? `#${id}` : `/#${id}`} onClick={(event) => goTo(event, id)}>{label}</a>)}
    </nav>
  </aside>;
}
