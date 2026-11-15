export const profile = {
  name: "Tridip Pramanick",
  location: "Bengaluru, India",
  email: "iamtridip06@gmail.com",
  github: "https://github.com/tryindeep",
  linkedin: "https://www.linkedin.com/in/tryindeep",
  x: "https://x.com/tryindeep",
  resume: "/Tridip_Pramanick_Software_Engineer_2026.pdf",
};

export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Hello Tridip")}`;

export const experience = {
  company: "LTIMindtree",
  role: "Software Engineer",
  period: "Aug 2023 – Feb 2026",
  location: "Bengaluru, India",
  highlights: [
    "Reduced application load time by 21%, raising Lighthouse Performance from 65% to 82% with lazy loading, React memoization, code splitting, and Core Web Vitals optimization.",
    "Cut redundant API requests by 30% through SWR caching, request deduplication, and improved client-side state management.",
    "Reduced integration defects by 40% across six production release cycles by designing REST API contracts with a five-person backend team using OpenAPI.",
    "Shipped three production modules for the ULTIMA platform in Node.js, supporting enterprise financial workflows used by 10,000+ people daily.",
    "Collaborated across engineering teams on code reviews, defect resolution, and production feature delivery.",
  ],
};

export const project = {
  title: "ReserveIt",
  subtitle: "Movie Ticket Booking Platform",
  summary: "A concurrency-safe movie ticket booking platform built around reliable seat reservations, payment processing, and accurate inventory.",
  details: [
    ["Seat locking", "Redis SET NX EX locks paired with PostgreSQL optimistic concurrency control prevent double bookings."],
    ["Booking lifecycle", "A booking state machine and scheduled cleanup job release abandoned seat holds after five minutes."],
    ["Payments", "Idempotent Razorpay flows and HMAC-SHA256 webhook verification prevent duplicate booking confirmations."],
    ["Data model", "A 12-model multi-tenant Prisma and PostgreSQL schema enforces showtime and seat integrity."],
  ],
  technologies: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Prisma", "Razorpay"],
  github: "https://github.com/tryindeep/reserveit",
  live: "https://reserveit-frontend.vercel.app/",
};

export const publication = {
  title: "Skin Lesion Segmentation Using a Modified SegNet Model",
  venue: "Springer CIIR · 2023",
  summary: "Co-authored a Springer-indexed paper proposing a modified SegNet architecture for skin lesion segmentation on a benchmark dataset.",
  result: "99.14% segmentation accuracy",
  link: "https://drive.google.com/file/d/1aDm7C9Q_5mvb_Rj3Fq5RaUl03xKhLEuJ/view?usp=sharing",
};

export const education = {
  institution: "Institute of Engineering & Management (IEM)",
  degree: "Bachelor of Computer Applications (BCA)",
  location: "Kolkata, India",
  period: "Jul 2020 – Jun 2023",
  result: "CGPA 9.44 / 10.0",
};

export const skillGroups = [
  ["Languages", ["C++", "JavaScript", "TypeScript"]],
  ["Frontend", ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "Prisma ORM"]],
  ["Databases", ["PostgreSQL", "MongoDB", "MySQL", "Redis"]],
  ["Systems", ["Concurrency control", "Distributed locking", "Database indexing"]],
  ["Authentication", ["JWT", "OAuth 2.0"]],
  ["Cloud & DevOps", ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"]],
  ["CS Fundamentals", ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]],
  ["Tools", ["Linux", "Turborepo", "Postman"]],
];
