import {
  Binary,
  Blocks,
  Braces,
  Code2,
  Database,
  KeyRound,
  ListTree,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Webhook,
  Workflow,
} from "lucide-react";
import { DiAws, DiCss3, DiJava, DiNodejs } from "react-icons/di";
import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skillGroups } from "../data";
import Section from "./Section";

const skillIcons = {
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: DiCss3,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": DiNodejs,
  "Express.js": SiExpress,
  "REST APIs": SiOpenapiinitiative,
  "Prisma ORM": SiPrisma,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  "Concurrency control": LockKeyhole,
  "Distributed locking": LockKeyhole,
  "Database indexing": ListTree,
  JWT: SiJsonwebtokens,
  "OAuth 2.0": KeyRound,
  AWS: DiAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  "CI/CD": SiGithubactions,
  "Data Structures & Algorithms": Binary,
  OOP: Blocks,
  DBMS: Server,
  "Operating Systems": Terminal,
  Linux: SiLinux,
  Turborepo: SiTurborepo,
  Postman: SiPostman,
  "GitHub": SiGithub,
  Django: SiDjango,
  Java: DiJava,
  "n8n": SiN8N,
  Vercel: SiVercel,
};

export default function Skills() {
  const items = [...new Set(skillGroups.flatMap(([, technologies]) => technologies))];
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skill-grid">
        {items.map((item) => {
          const Icon = skillIcons[item] || Code2;
          return (
            <span className="skill-chip" key={item} title={item}>
              <Icon className="skill-chip-icon" aria-hidden="true" />
              <span>{item}</span>
            </span>
          );
        })}
      </div>
    </Section>
  );
}
