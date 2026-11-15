import { useEffect, useState } from "react";
import { ArrowUpRight, GitPullRequest, GitMerge } from "lucide-react";
import { profile } from "../data";
import Section from "./Section";

export function Activity() {
  return <Section id="activity" title="GitHub Activity" note="Contribution history">
    <div className="activity-panel">
      <div className="activity-caption">Contribution activity for <a href={profile.github} target="_blank" rel="noreferrer">tryindeep</a> during the past year.</div>
      <a className="chart-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="View GitHub contribution calendar">
        <img src="https://ghchart.rshah.org/tryindeep" alt="GitHub contribution calendar for tryindeep" loading="lazy" />
      </a>
      <div className="activity-legend"><span>Less active</span><div><i /><i /><i /><i /></div><span>More active</span></div>
    </div>
  </Section>;
}

export function OpenSource() {
  const [status, setStatus] = useState("merged");
  const [pullRequests, setPullRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const query = `author%3Atryindeep+is%3Apr+is%3A${status}`;
  const href = `https://github.com/pulls?q=${query}`;
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setLoadError(false);
    fetch(`https://api.github.com/search/issues?q=${query}&sort=updated&order=desc&per_page=5`, { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } })
      .then((response) => { if (!response.ok) throw new Error("GitHub search unavailable"); return response.json(); })
      .then((payload) => setPullRequests((payload.items || []).map((item) => ({
        title: item.title,
        url: item.html_url,
        repo: (item.repository_url || "").replace("https://api.github.com/repos/", ""),
        updatedAt: item.updated_at,
      }))))
      .catch((error) => { if (error.name !== "AbortError") setLoadError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [query]);
  return <Section id="open-source" title="Open Source Contributions">
    <div className="opensource-panel">
      <div className="source-tabs" role="tablist" aria-label="Pull request status">
        <button role="tab" aria-selected={status === "merged"} className={status === "merged" ? "active" : ""} onClick={() => setStatus("merged")}><GitMerge size={13} />Merged</button>
        <button role="tab" aria-selected={status === "open"} className={status === "open" ? "active" : ""} onClick={() => setStatus("open")}><GitPullRequest size={13} />Open</button>
      </div>
      <div className="pull-request-list" aria-live="polite">
        {loading && <p className="pull-request-message">Loading {status} pull requests…</p>}
        {!loading && !loadError && pullRequests.map((pr) => <a className="pull-request-row" href={pr.url} target="_blank" rel="noreferrer" key={pr.url}>
          <span className={`pull-request-icon ${status}`} aria-hidden="true">{status === "merged" ? <GitMerge size={13} /> : <GitPullRequest size={13} />}</span>
          <span className="pull-request-info"><b>{pr.title}</b><small>{pr.repo}</small></span>
          <time>{pr.updatedAt ? new Date(pr.updatedAt).toLocaleDateString("en", { month: "short", year: "numeric" }) : ""}</time>
          <ArrowUpRight size={13} />
        </a>)}
        {!loading && !loadError && !pullRequests.length && <p className="pull-request-message">No {status} pull requests found for this profile.</p>}
        {!loading && loadError && <a className="contribution-link" href={href} target="_blank" rel="noreferrer"><span>Couldn’t load GitHub data. Browse {status} pull requests on GitHub.</span><ArrowUpRight size={16} /></a>}
      </div>
    </div>
  </Section>;
}
