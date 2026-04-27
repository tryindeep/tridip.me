// Static portfolio content - edit values here to update the site

export const profile = {
  name: "Tridip Pramanick",
  shortName: "Tridip",
  location: "Kolkata, India",
  role: "Software Engineer & aspiring AI Engineer",
  tagline:
    "Frontend-focused software engineer interested in open source, applied AI, and building thoughtful developer-friendly products.",
  summary:
    "I'm a software engineer with experience building enterprise frontend systems and an independent researcher who has worked on deep learning for medical image segmentation. I'm especially interested in open-source collaboration, practical machine learning, and writing clean, maintainable product code.",
  photo:
    "/customer-assets.emergentagent.com/job_tridip-lab/artifacts/6qkvthci_QfT7HIfF_400x400.jpg",
  email: "iamtridip06@gmail.com",
  resumeUrl: null,
  links: {
    github: "https://github.com/tryindeep",
    linkedin: "https://www.linkedin.com/in/tryindeep/",
    twitter: "https://x.com/tryindeep",
    email: "mailto:iamtridip06@gmail.com",
  },
};

export const now = [
  "Sharpening backend skills with Node.js and system design.",
  "Exploring open-source through MLH Fellowship, GSoC and LFX.",
  "Learning by building with AI and computer vision.",
];

export const experience = [
  {
    role: "Engineer",
    company: "LTIMindtree",
    period: "Aug 2023 - Feb 2026",
    location: "Remote",
    bullets: [
      "Contributed to the frontend architecture of an internal enterprise platform used across business units.",
      "Built reusable UI components with a strong focus on accessibility, performance, and maintainability.",
      "Worked closely with backend, design, and QA teams to improve scalability and usability.",
    ],
  },
];

export const projects = [
  {
    title: "Food Label Intelligence",
    status: "Early Stage",
    year: "2025 -",
    summary:
      "An early-stage concept for turning ingredient labels into simpler, more understandable food insights.",
    details: [
      "Uses OCR to extract ingredient text from packaging photos.",
      "Focuses on plain-language explanation instead of technical jargon.",
    ],
    stack: ["React", "Python", "OCR", "Tailwind", "Computer Vision"],
    link: null,
  },
];

export const research = [
  {
    title: "Skin Lesion Segmentation using a Modified SegNet",
    venue: "Independent research project",
    year: "2023",
    summary:
      "A deep learning project for automated skin lesion segmentation using a modified SegNet architecture.",
    highlights: [
      "Trained on the PH2 dermoscopic dataset, augmented from 200 to 540 images.",
      "Achieved 99.14% accuracy, 96.94 Dice score and 99.11 Jaccard index.",
      "Built with TensorFlow, Keras, and OpenCV.",
    ],
    paperLabel: "Read paper",
    paperUrl: "/Major_Project_Report_12B-2.pdf",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "Python", "C++"],
  },
  {
    group: "Frontend",
    items: ["React", "Tailwind CSS", "HTML / CSS"],
  },
  {
    group: "Backend (learning)",
    items: ["Node.js", "REST APIs"],
  },
  {
    group: "ML / AI",
    items: ["CNNs", "Image Segmentation", "Deep Learning", "OCR"],
  },
  {
    group: "Tools",
    items: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Git"],
  },
];

export const interests = [
  "Backend engineering with Node.js",
  "Real-world ML applications",
  "Open-source & developer communities",
];

export const achievements = [
  "Completed an independent deep-learning research project in medical imaging.",
  "Actively exploring programs like MLH Fellowship, GSoC and LFX.",
];

export const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Project",
    href: "#projects",
  },
  {
    label: "Research",
    href: "#research",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
