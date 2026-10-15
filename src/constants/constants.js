// Static content source for the site.
// Modeled with rich metadata, project theme tokens, skills breakdown, UI lab experiments, and logs.

export const about = {
  name: "Nadir S Hadiansyah",
  short_name: "Nadha",
  role: "Full Stack Developer",
  headline: "I design interfaces into working website.",
  bio: "Front-end developer with three internships building production React/Next.js applications, from component-driven UI to the REST APIs they consume. Comfortable turning designs into accessible, performant, type-safe interfaces.",
  now: "Developing HRIS website for increasing my depth of engineering",
  profile_picture: "/assets/images/profile.JPEG",
  location: "Bandung, Indonesia (GMT+7)",
  availability: "Available for full-time roles & freelance",
  manifesto:
    "I believe great digital products live at the intersection of rigorous engineering and intentional design. With three internships building production web applications, I focus on crafting scalable component architectures, fluid micro-interactions, and performant user experiences.",
};

export const skills = {
  frontend: {
    category: "Core Front-end",
    items: [
      "React",
      "Next.js (App & Pages)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & Semantic Web",
      "CSS3 & Modern Layouts",
      "TailwindCSS v4",
      "Sass / SCSS",
    ],
  },
  architecture: {
    category: "State & Architecture",
    items: [
      "Zustand",
      "Redux Toolkit",
      "Context API",
      "REST APIs Integration",
      "TanStack Query",
      "Vite",
      "Client-side Routing",
      "Mock APIs & Data Modeling",
    ],
  },
  motion: {
    category: "Design Engineering & Motion",
    items: [
      "Framer Motion",
      "Lenis Smooth Scrolling",
      "Micro-interactions",
      "CSS Animation & Keyframes",
      "Responsive & Fluid Typography",
      "Component Architecture",
      "Accessibility (a11y)",
    ],
  },
  tools: {
    category: "Design Systems & Tooling",
    items: [
      "Figma",
      "Shadcn UI",
      "Radix UI",
      "Storybook",
      "Git & GitHub Actions",
      "Vercel Deployment",
      "Postman",
      "VS Code",
    ],
  },
};

export const projects = [
  {
    id: 1,
    slug: "wm-center-erp",
    title: "WM Center ERP",
    year: "2026",
    disciplines: ["Product UI", "App development", "Dashboards"],
    tagline:
      "Finance and procurement ERP dashboard for multi-branch operations.",
    description:
      "Front-end architecture of WM Center's finance and procurement ERP dashboard. Covers monthly and event procurements (RAB) through request, approval, revision, and lifecycle tracking, plus expenses, purchase records, branch/item/category management, Shopee import, activity logs, and chart analytics. Role-based access for Admin, General Affairs, and Finance, backed by an in-memory mock API so the full UI runs without a real backend.",
    challenge:
      "Migrating paper-based and spreadsheet procurement workflows across distributed business units into a unified, secure system with zero backend dependency during client testing.",
    solution:
      "Engineered a resilient client-side mock backend coupled with type-safe state machines for multi-tier approval flows, granular RBAC gates, and real-time budget forecasting charts.",
    tech_stacks: ["React", "NextJS", "TypeScript", "TailwindCSS", "Shadcn"],
    images: [
      {
        image_url: "/assets/images/projects/project3/ERP-Shot1.png",
        alt: "WM Center ERP analytics and financial dashboard",
      },
      {
        image_url: "/assets/images/projects/project3/ERP-Shot2.png",
        alt: "WM Center ERP procurement workflow management",
      },
      {
        image_url: "/assets/images/projects/project3/ERP-Shot3.png",
        alt: "WM Center ERP procurement creation",
      },
    ],
    theme: {
      bg: "#00081f",
      border: "#121c49",
      accent: "#3959f9",
      accentLight: "#60a5fa",
      stampIris: "#3959f9",
      textMuted: "#94a3b8",
      glow: "rgba(57, 89, 249, 0.15)",
    },
  },
  {
    id: 2,
    slug: "pourity",
    title: "Pourity",
    year: "2026",
    disciplines: ["Product design", "Web app", "ATS tooling"],
    tagline:
      "Client-only ATS-friendly CV & Cover Letter builder with live preview.",
    description:
      "Client-only ATS-friendly CV builder with a two-panel form and live single-column preview, plus Cover Letter and Motivation Letter makers that can reuse CV data. Sections are editable and reorderable with localStorage autosave, A4 pagination for print, and browser print-to-PDF export that keeps selectable text for applicant-tracking systems.",
    challenge:
      "Ensuring 100% parseable plain-text PDF export in browsers while maintaining elegant typographic structure and live form synchronisation.",
    solution:
      "Built CSS-paged media layouts targeting standard A4 print margins, combined with localStorage draft persistence and unified field data syncing between CV and motivation letters.",
    tech_stacks: ["React", "TypeScript", "Vite", "TailwindCSS", "React Router"],
    images: [
      {
        image_url: "/assets/images/projects/project2/Pourity-Shot1.png",
        alt: "Pourity ATS resume builder interface and live preview",
      },
      {
        image_url: "/assets/images/projects/project2/Pourity-Shot2.png",
        alt: "Pourity Cover Letter builder",
      },
      {
        image_url: "/assets/images/projects/project2/Pourity-Shot3.png",
        alt: "Pourity Motivation Letter builder",
      },
    ],
    theme: {
      bg: "#051a14",
      border: "#12382c",
      accent: "#10b981",
      accentLight: "#34d399",
      stampIris: "#10b981",
      textMuted: "#a7f3d0",
      glow: "rgba(16, 185, 129, 0.15)",
    },
  },
  {
    id: 3,
    slug: "aulify",
    title: "Aulify",
    year: "2026",
    disciplines: ["Full Stack", "FinTech", "Web App"],
    tagline:
      "Modern personal finance tracker & expense management web application.",
    description:
      "Full-stack personal finance application built to track daily incomes, expenses, categories, and account balances with real-time insight. Features secure JWT & cookie authentication, dynamic transaction filtering, category management, and responsive dashboard charts with mobile and desktop-friendly workflows.",
    challenge:
      "Creating a cohesive, secure financial management experience with fast transaction feedback, consistent data aggregation across custom user categories, and a resilient REST API with PostgreSQL.",
    solution:
      "Engineered an Express and PostgreSQL backend with robust relational data models, paired with a React 19 and Tailwind CSS frontend featuring Recharts financial visualizations, custom hooks, and modular UI dialogs.",
    tech_stacks: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "TailwindCSS",
      "Recharts",
      "Vite",
    ],
    images: [
      {
        image_url:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
        alt: "Aulify personal finance and expense dashboard",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
        alt: "Aulify financial analytics and transaction metrics",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        alt: "Aulify transaction breakdown and category management",
      },
    ],
    theme: {
      bg: "#160b24",
      border: "#2e124d",
      accent: "#a855f7",
      accentLight: "#c084fc",
      stampIris: "#a855f7",
      textMuted: "#d8b4fe",
      glow: "rgba(168, 85, 247, 0.15)",
    },
  },
  {
    id: 4,
    slug: "verity",
    title: "Verity",
    year: "2026",
    disciplines: ["Full Stack", "Productivity", "Web App"],
    tagline:
      "Personal job application & CV tracking dashboard with Google Drive and Sheets sync.",
    description:
      "Dual-mode job application and CV management dashboard built with Next.js 16 and Auth.js v5. Supports seamless Google Workspace integration (auto-syncing applications into Google Sheets and uploading CV files into Google Drive) alongside a standalone offline Guest Mode running in localStorage. Features live interview tracking, CV previews, and structured job funnel analytics.",
    challenge:
      "Architecting a hybrid runtime that enables zero-friction guest usage with local persistence while providing automated Google OAuth2 provisioning, token refresh cycles, and cloud spreadsheet synchronization for signed-in users.",
    solution:
      "Engineered a resilient API client and sync orchestration layer with Auth.js session handling, Google Drive & Sheets API services, and responsive Radix UI interfaces with Framer Motion transitions.",
    tech_stacks: [
      "Next.js",
      "React",
      "TypeScript",
      "Google APIs",
      "Auth.js",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
    ],
    images: [
      {
        image_url:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80",
        alt: "Verity job application tracking and status dashboard",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80",
        alt: "Verity CV repository and document management",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        alt: "Verity Google Sheets and Drive synchronization workflow",
      },
    ],
    theme: {
      bg: "#1c1408",
      border: "#3d2a0d",
      accent: "#f59e0b",
      accentLight: "#fbbf24",
      stampIris: "#f59e0b",
      textMuted: "#fde68a",
      glow: "rgba(245, 158, 11, 0.15)",
    },
  },
];

export const milestones = [
  {
    id: 1,
    kind: "deployment",
    company_name: "Deployed Aulify",
    title:
      "Modern personal finance tracker & expense management web application.",
    start_date: "2026-10",
    description:
      "Full-stack personal finance application built to track daily incomes, expenses, categories, and account balances with real-time insight. Features secure JWT & cookie authentication, dynamic transaction filtering, category management, and responsive dashboard charts with mobile and desktop-friendly workflows.",
    tech_stacks: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "TailwindCSS",
      "Recharts",
      "Vite",
    ],
    url: "/work/aulify",
  },
  {
    id: 2,
    kind: "deployment",
    company_name: "Deployed Verity (Work Tracker) with Google Sync",
    title:
      "Dual-mode job application & CV tracking dashboard with Google Workspace sync.",
    start_date: "2026-09",
    description:
      "Architected and deployed Verity, a full-stack job tracking application featuring automated Google Drive and Sheets cloud syncing, Auth.js Google OAuth authentication, and an instant client-side offline guest mode.",
    tech_stacks: [
      "Next.js",
      "TypeScript",
      "Google APIs",
      "Auth.js",
      "TailwindCSS",
      "Radix UI",
    ],
    url: "/work/pourity",
  },
  {
    id: 3,
    kind: "deployment",
    company_name: "Deployed Pourity v1: Zero-backend ATS Resume Builder",
    title:
      "Free ATS Resume with Cover Letter and Motivation Letter builder with no backend. Content is stored in localStorage",
    start_date: "2026-07",
    description:
      "Launched Pourity, a client-only CV and Cover Letter generator focused on standard A4 print margins, 100% ATS text readability, and localStorage instant persistence.",
    tech_stacks: ["React", "TypeScript", "Vite", "TailwindCSS", "React Router"],
    url: "/work/verity",
  },
  {
    id: 4,
    kind: "internship",
    company_name: "Finished WM Center Internship",
    title: "Front-end Developer Intern",
    start_date: "2025-11",
    end_date: "2026-05",
    description:
      "Collaborated across design, backend, and business teams to deliver ERP modules (Procurement, Expense Tracking, Branch Management, User Management, Authentication, and RBAC) supporting daily operations across multiple business units. Helped migrate finance and procurement workflows from spreadsheets into a centralized web platform, improving process visibility and reducing manual handling. Managed end-to-end procurement workflow logic from request creation through approval, revision, and lifecycle tracking, and integrated frontend systems with backend APIs for accurate, real-time handling of financial and approval data.",
    tech_stacks: ["React", "NextJS", "REST APIs", "TailwindCSS"],
  },
  {
    id: 5,
    kind: "publication",
    company_name: "IEEE ICoSEIT 2025",
    title:
      "Published paper: Analysis of Student Event Logs on Telkom University LMS Using Heuristic Miner to Reveal Student Learning Patterns",
    start_date: "2025-10",
    end_date: "2025-10",
    description:
      "Peer-reviewed paper applying the Heuristic Miner algorithm and PM² methodology to CeLOE LMS event logs (669,717 events across 13 classes) to measure how closely remedial and non-remedial students followed the Semester Learning Plan. Conformance checking revealed that non-remedial students aligned more tightly with the planned flow (precision 0.70 vs 0.49), while both groups deviated through out-of-sequence material access and late-semester looping — findings that inform data-driven SLP restructuring.",
    tech_stacks: ["Python", "Disco", "ProM", "Microsoft Excel"],
    url: "https://doi.org/10.1109/ICoSEIT67010.2025.11290862",
  },
  {
    id: 6,
    kind: "internship",
    company_name: "Finished Rastek ID Internship",
    title: "Front-end Developer Intern",
    start_date: "2024-12",
    end_date: "2025-02",
    description:
      "Partnered with design and back-end teams to build and maintain an employee attendance system, translating design requirements into functional, real-time interfaces. Worked cross-functionally to consume real-time API data and improve UI responsiveness and performance.",
    tech_stacks: ["ReactJS", "Bootstrap", "REST APIs"],
  },
  {
    id: 7,
    kind: "internship",
    company_name: "Finished Yayasan Pendidikan Telkom Internship",
    title: "Front-end Developer Intern",
    start_date: "2024-07",
    end_date: "2024-08",
    description:
      "Collaborated with a design team to build a responsive employee attendance monitoring application, ensuring cross-device compatibility and usability.",
    tech_stacks: ["VueJS", "NuxtJS", "Bootstrap", "Axios"],
  },
  {
    id: 8,
    kind: "education",
    company_name: "Telkom University",
    title: "B.Sc. Computer Science",
    start_date: "2021-08",
    end_date: "2025-08",
    description:
      "Completed a Computer Science degree with a focus on data science " +
      "and software engineering, alongside 3 industry internships and published paper at ICoSEIT 2025.",
  },
];

export const uiLabExperiments = [
  {
    id: "01",
    title: "Dynamic Pay Button",
    tagline:
      "A dynamic action pill that expands into an interactive card wallet.",
    description:
      "Inspired by modern checkout flows and tactile design engineering. Click the pill button to expand it into an interactive card selector with draggable, flippable credit card layers and payment switching.",
    tags: ["Micro-interaction", "Spring Physics", "Framer Motion", "UI Lab"],
    status: "Interactive",
  },
  {
    id: "02",
    title: "Tactile Haptic Slider & Magnetic Switch",
    tagline: "Fluid spring-tensioned slider with magnetic snap stops.",
    description:
      "Exploration of physical resistance and spring physics in pure web software. Features velocity-based drag tracking, discrete snap feedback, and responsive numeric displays.",
    tags: ["Physics", "Drag Gesture", "Component Design"],
    status: "Interactive",
  },
];

export const feedItems = [
  {
    id: 1,
    date: "Sep 2026",
    title: "Deployed Verity (Work Tracker) with Google Sync",
    tag: "Deployment",
    content:
      "Launched Verity on September 21, 2026. Built a dual-mode job application and CV tracking dashboard with automated Google Drive & Sheets syncing via Auth.js v5 and a zero-dependency offline guest mode in localStorage.",
  },
  {
    id: 2,
    date: "Sep 2026",
    title: "Deployed Aulify Money Tracker v1",
    tag: "Deployment",
    content:
      "Deployed full-stack personal finance application built to track daily incomes, expenses, categories, and account balances with real-time insight. Features secure JWT & cookie authentication, dynamic transaction filtering, category management, and responsive dashboard charts with mobile and desktop-friendly workflows.",
  },
  {
    id: 3,
    date: "July 2026",
    title: "Pourity v1: Zero-backend ATS Resume Builder",
    tag: "Side Project",
    content:
      "Launched Pourity, a client-only CV and Cover Letter generator focused on standard A4 print margins, 100% ATS text readability, and localStorage instant persistence.",
  },
  {
    id: 4,
    date: "May 2026",
    title: "Wrapping up 6-month ERP Internship at WM Center",
    tag: "Milestone",
    content:
      "Delivered 6 core production modules: Procurement Request & Approval, Multi-level RAB tracking, Branch Asset Management, and In-memory testing architecture.",
  },
];

export const experience = milestones.filter((m) => m.kind === "major");

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getMilestonesByKind(kind) {
  return milestones.filter((m) => m.kind === kind);
}
