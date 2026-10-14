export type Resume = { id: string; label: string; path: string };

export const siteConfig = {
  name: "Ravi Yadav",
  metaTitle: "Ravi Yadav | AI/ML Researcher · IEEE APPEEC 2026 Co-Author",
  metaDescription:
    "AI/ML researcher building intelligent, scalable systems. Co-author of a physics-informed load forecasting paper at IEEE APPEEC 2026, Singapore.",
  /** Production URL (no trailing slash) — used for canonical URL, sitemap, robots and share previews. */
  siteUrl: "https://raviyadav6522.vercel.app",
  email: "yadavr74839@gmail.com",
  /** Résumé PDFs in `public/` (exact filenames). The first one is the default. Commit + push so Vercel serves them. */
  resumes: [
    { id: "sde", label: "SDE", path: "/RaviYadav_SDE_Resume.pdf" },
    { id: "aiml", label: "AI/ML", path: "/RaviYadav_AIML_Resume.pdf" },
  ] as Resume[],
  /** Bump this every time you replace a PDF (same filename) so the link changes and caches invalidate. */
  resumeCacheKey: "8",
  /** Photo in `public/` — e.g. `/profile.jpeg` or `/profile.png` (square, ≥256×256 recommended). */
  profileImage: "/profile-photo.jpg",
  social: {
    github: "https://github.com/RAVIYADAV6522",
    linkedin: "https://www.linkedin.com/in/ravi-y-963457363/",
    leetcode: "https://leetcode.com/u/ravi_yadav6522/",
  },
};

export const hero = {
  greeting: "Hi, I'm Ravi Yadav 👋",
  /** Primary intro (shown below the greeting) */
  summaryLine:
    "Building Intelligent, Scalable Systems | AI/ML Researcher | IEEE APPEEC 2026 Co-Author",
  /** Thought cloud shown above the profile photo on hover (tap on phones). */
  avatarGreeting: "Hey, how was your day?",
  /** Status pill above the greeting — say which roles you want. */
  availability: "Open to SDE and AI/ML roles",
  /** Top wins shown as badges under the summary; each links to the Achievements section. */
  badges: [
    { place: "3rd", title: "IEEE PES Energy Shark Tank 2026" },
    { place: "1st", title: "NST Startup Foundry 2026" },
  ],
};

export const about = {
  introParagraphs: [
    "I build intelligent systems around one question: how do we make them **work reliably in the real world**, not just on a benchmark?",
    "My research focuses on **deep learning for energy and physical systems**, where models must respect the laws of the system instead of just fitting patterns in data. I'm **second author** on a physics-informed load forecasting paper presented at **IEEE APPEEC 2026** in Singapore, part of my ongoing work on power-grid forecasting and resilience.",
    "Beyond research, I love **system design**: how software is built from the ground up, from APIs and databases to architecture that stays fast and reliable as it scales. **Competitive programming** is where I sharpen my problem-solving; I enjoy the challenge of turning a hard problem into a clean, efficient solution.",
  ],
  closingParagraphs: [
    "Long term, I want to work at the intersection of **machine learning, physical systems and infrastructure**, building software that holds up in the real world. If you're working on something in that space, I'd love to talk.",
  ],
};

export type WorkEntry = {
  company: string;
  role: string;
  dates: string;
  logo: string;
  location?: string;
  bullets: string[];
};

export const workExperience: WorkEntry[] = [
  {
    company: "Algocept",
    role: "Software Engineer Intern",
    dates: "January 2025 – April 2025 · 4 mos",
    location: "Noida, Uttar Pradesh, India · Remote",
    logo: "AC",
    bullets: [
      "Resolved **20+ UI/UX and responsiveness issues** in a **React.js and Tailwind CSS** admin dashboard, so it behaves consistently on desktop, tablet and mobile.",
      "Cut initial dashboard load time by **~50%** by adding **server-side pagination** to a list of **500+ users**, fetching one page at a time instead of every record at once.",
      "Developed a **RESTful API** with **NestJS, TypeScript and MongoDB** supporting **3 country-specific configurations**, so each region serves its own footer content without frontend code changes.",
    ],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  location?: string;
  dates: string;
  grade: string;
};

export const educationEntries: EducationEntry[] = [
  {
    degree: "Bachelor of Technology (Artificial Intelligence)",
    institution: "Newton School of Technology, Rishihood University",
    location: "Delhi NCR, India",
    dates: "2023 – 2027",
    grade: "7.05 / 10.0",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Malviya Convent School",
    location: "Jaipur, Rajasthan",
    dates: "2021 – 2022",
    grade: "83.0%",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "St. Edmund's School",
    location: "Jaipur, Rajasthan",
    dates: "2019 – 2020",
    grade: "91.1%",
  },
];

export type Award = {
  title: string;
  org: string;
  year: string;
  description: string;
};

export const honorsAwards: Award[] = [
  {
    title: "JEE Advanced '23 — AIR 6522",
    org: "Issued by IIT Delhi",
    year: "Jun 2023",
    description:
      "Secured All India Rank (AIR) 6522 in JEE (Advanced) 2023 among 180,000+ candidates.",
  },
  {
    title: "JEE Main '23 — 97.84 Percentile",
    org: "Issued by NTA (National Testing Agency)",
    year: "Apr 2023",
    description:
      "Scored in the 97.84 percentile in JEE Main 2023 among 1.1M+ candidates.",
  },
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    category: "ML & AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Time Series Forecasting",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    category: "Generative AI",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "OpenAI API",
    ],
  },
  {
    category: "Languages & Scientific Computing",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Java",
      "OOP",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Prisma ORM",
    ],
  },
  {
    category: "Web, Backend & Tools",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "REST APIs",
      "System Design",
      "Git/GitHub",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Swagger",
      "UI/UX",
    ],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Problem-solving",
    ],
  },
  {
    category: "Soft skills",
    items: [
      "Research",
      "Teamwork",
      "Communication skills",
    ],
  },
];

export type Publication = {
  title: string;
  /** Author list in citation order; names matching `siteConfig.name` are bolded. */
  authors?: string[];
  /** Venue / status line shown under the authors. */
  status: string;
  bullets?: string[];
  githubUrl: string;
  githubLabel?: string;
};

export const publications: Publication[] = [
  {
    title: "KAT-PatchTST: Physics-Informed Forecasting with Kirchhoff Conservation",
    authors: ["C. Murali Madhav", "Ravi Yadav", "K. Mehra", "A. Tewary", "S. Aggarwal"],
    status:
      "18th Asia Pacific Power and Energy Engineering Conference (APPEEC), Singapore · August 2026 · IEEE · Paper ID 190",
    bullets: [
      "Accepted and presented at IEEE APPEEC 2026; conference proceedings publication pending.",
      "Stage 1 of the Watt-IF research project; Stages 2 and 3 under active development, targeting ICML.",
      "Provisional patent filed.",
    ],
    githubUrl: "https://github.com/HackHeroic/Watt-IF",
    githubLabel: "Watt-IF on GitHub",
  },
];

export type ProjectCategory = "ai" | "fullstack" | "systems";

/** Which animated mini-illustration the project card shows. */
export type ProjectVisualKind =
  | "grid"
  | "options"
  | "files"
  | "snake"
  | "search"
  | "forest"
  | "docsearch"
  | "cells";

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "fullstack", label: "Full-stack" },
  { id: "systems", label: "Systems" },
];

export type Project = {
  title: string;
  categories: ProjectCategory[];
  visual: ProjectVisualKind;
  /** Shown as the big card at the top of the grid. */
  featured?: boolean;
  tags: string[];
  /** Resume-style impact bullets; use at least three per project. */
  bullets: string[];
  githubUrl?: string;
  /** If set, the project card shows a "Demo" link next to GitHub. */
  demoUrl?: string;
  reportUrl?: string;
};

export const projects: Project[] = [
  
  {
    title: "Watt-IF – Electricity Data Mining and Grid Resilience Research",
    categories: ["ai"],
    visual: "grid",
    featured: true,
    tags: [
      "Python",
      "XGBoost",
      "Deep Learning",
      "TensorFlow",
      "Data Mining",
      "Graph Theory",
    ],
    githubUrl: "https://github.com/HackHeroic/Watt-IF",
    bullets: [
      "KAT-PatchTST (Stage 1, 2nd author, IEEE APPEEC 2026): Developed a **physics-informed load forecaster** for U.S. balancing authorities (BAs) combining a channel-independent PatchTST backbone, TimeXer-style cross-attention, a **Kirchhoff conservation regularizer** and ReLoBRaLo dynamic loss balancing. Reached **3.65% demand MAPE** across six BAs on the EIA-930 protocol, inside the published accuracy tier, with **~3.9M parameters** (comparable in size to the 2.0–6.5M baselines).",
      "Stage 2 (In Development): Extending the forecasting framework toward **operational feasibility analysis** over the BA interchange network to identify systemic bottlenecks and quantify **node criticality** from forecasted grid states.",
      "Stage 3 (In Development): Developing a **conditional grid partitioning policy** to minimize allocation failures under forecasted operating conditions, motivated by ORNL’s reported **$121B annual cost** of major U.S. power outages in 2024.",
    ],
  },
  
  {
    title: "Automated Malaria Cell Detection",
    categories: ["ai"],
    visual: "cells",
    tags: [
      "Python",
      "TensorFlow",
      "EfficientNet",
      "Computer Vision",
      "Medical Imaging",
      "Paper Reproduction",
    ],
    githubUrl: "https://github.com/amathziah/malaria-detection",
    bullets: [
      "Manual microscopy of blood smears is slow and error-prone; our team reproduced an **EfficientNet ensemble** (Marques et al., 2022) that automatically detects malaria-infected red blood cells in thin blood smear images.",
      "Trained **10 EfficientNet-B0 models** with 10-fold cross-validation on **27,558 NIH cell images**, one RTX 4090 per fold in parallel (**~11 min per fold** vs. 4 h 46 min in the paper), with **32 fidelity tests** against its code.",
      "Reached **97.62% ensemble accuracy** and **99.73% ROC-AUC**, **within 1 pp of the paper**, and **found 2 errors** in the paper; I built the results presentation and verified the reported metrics against experiment outputs.",
    ],
  },
  {
    title: "Document Search Engine",
    categories: ["systems", "fullstack"],
    visual: "docsearch",
    tags: [
      "PostgreSQL",
      "Full-Text Search",
      "SQL",
      "Node.js",
      "JavaScript",
      "Neon",
      "Render",
    ],
    githubUrl: "https://github.com/RAVIYADAV6522/document-search-service",
    demoUrl: "https://document-search-service-0y08.onrender.com",
    bullets: [
      "Keyword search over a growing document library must stay relevant and fast, but ranking every document in application code **slows down as data grows** and misses word variants (e.g. budgets vs. budget).",
      "Built and deployed a search engine over **10,000+ documents** using **PostgreSQL full-text search** (tsvector, GIN index, ts_rank) and a **cosine-similarity ranker built from scratch**, compared live side by side in the UI.",
      "Made lookups **~35–45× faster** (measured with EXPLAIN ANALYZE) using composite indexes, relational division and anti-joins, with search **under 20 ms**. Backed by **50 automated tests**, including integration tests on real PostgreSQL.",
    ],
  },
  {
    title: "PrepLens – Placement Prep Platform",
    categories: ["fullstack"],
    visual: "search",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Google OAuth",
      "REST API",
      "Vercel",
      "Render",
    ],
    githubUrl: "https://github.com/RAVIYADAV6522/PrepLens",
    demoUrl: "https://preplens-umber.vercel.app/",
    bullets: [
      "When a company visited campus, students across a college of **~2,000** spent hours on **unstructured prep**, studying random topics without knowing what that company actually asks in each round. Built and deployed PrepLens (React, Node/Express, MongoDB, Vercel + Render) so seniors can share **round-by-round interview experiences**, aiming to save **10+ hours** of random prep per company.",
      "Designed a **pre-publication moderation workflow** with an admin review queue: every submission is approved, or rejected with feedback to the author, and each decision is **audited by reviewer**. Added **company-name deduplication** (alias matching plus admin merge/reject) to keep search filters clean.",
      "Implemented **role-based access** with separate student and admin sign-in over Google OAuth, restricted to the college domain plus an admin allowlist. Server-side hashed sessions and API-level anonymity protect author identity, backed by **117 automated tests** covering auth, moderation and data integrity.",
    ],
  },
  {
    title: "ForestLens – Tree Crown Detection & Canopy Area Estimation",
    categories: ["ai"],
    visual: "forest",
    tags: [
      "Python",
      "PyTorch",
      "DeepForest",
      "Rasterio",
      "SAM 2",
      "Streamlit",
      "Computer Vision",
      "Geospatial ML",
    ],
    githubUrl: "https://github.com/RAVIYADAV6522/forestlens",
    demoUrl: "https://forestlens-cujmcn43y5s8ev8vguauez.streamlit.app/",
    bullets: [
      "Carbon programs need per-tree counts and canopy area from high-resolution satellite imagery, but pretrained detectors return **confident but wrong numbers** when imagery differs from the resolution they were trained on.",
      "Built a Streamlit geospatial app with **tiled DeepForest detection**, IoU duplicate suppression, **SAM 2 crown masks** and GSD-based area from Rasterio GeoTIFFs, backed by **55 automated tests** and CSV/GeoJSON exports.",
      "Found DeepForest **fails at native 0.305 m/px** (5.8 trees/ha, 15 m crowns); resampling to its training scale gave **71 trees/ha** with **5.2 m crowns** (real: 4–8 m), and the app **withholds numbers it cannot justify**.",
    ],
  },
  {
    title: "Optiforge – Neural Options Pricing",
    categories: ["ai"],
    visual: "options",
    tags: [
      "Python",
      "TensorFlow",
      "LSTM",
      "GARCH",
      "Streamlit",
      "Financial Modeling",
    ],
    githubUrl: "https://github.com/HackHeroic/optiforge",
    demoUrl: "https://optiforge.streamlit.app/",
    bullets: [
      "Black–Scholes assumes **constant volatility** and log-normal returns, assumptions that break down in real markets during volatility spikes and at extreme strikes, leading to **systematically mispriced options**.",
      "Trained **8 MLP and LSTM pricing models** in TensorFlow on **420K synthetic** and **~32K real AAPL options** (2021–23), each with and without **GARCH(1,1)** volatility features, benchmarked against Black–Scholes pricing.",
      "Learned the Black–Scholes pricing surface at **R² 0.99998** and shipped a **live Streamlit dashboard** with heatmaps and sensitivity analysis comparing ML and analytical pricing side by side across all 8 model variants.",
    ],
  },


  {
    title: "AI-Powered File Organizer with OS-Level System Calls",
    categories: ["systems", "ai", "fullstack"],
    visual: "files",
    tags: [
      "C",
      "Operating Systems",
      "Next.js",
      "Node.js",
      "AI",
      "Semantic Search",
      "LLM",
      "Full Stack",
      "System Design"
    ],
    githubUrl: "https://github.com/HackHeroic/file_organizer",
    bullets: [
      "Connected **low-level C system calls** to a Next.js/Node full-stack app for file operations, natural-language commands, and **cross-format semantic search** (PDF, images, text).",
      "Implemented **AI-assisted auto-tagging** and a multi-step autonomous organizer with **explicit safety rules** and user confirmation for risky actions.",
      "Tuned the agent for **predictable tool use** and context limits so long-running organization tasks stay controllable in real directories.",
    ],
  },

  {
    title: "Snake Game OS with Custom Memory Allocator and Terminal Engine",
    categories: ["systems"],
    visual: "snake",
    tags: [
      "C",
      "Operating Systems",
      "Memory Management",
      "System Programming",
      "Data Structures",
      "Game Development",
      "Low Level Programming",
      "Terminal Rendering"
    ],
    githubUrl: "https://github.com/HackHeroic/Snake_game_os",
    bullets: [
      "Implemented a **real-time terminal Snake game in C** with custom string, math, screen, and input abstractions to stay close to the metal.",
      "Built a **64KB virtual memory allocator** (**first-fit + coalescing**) and **non-blocking keyboard input** for smooth frame-by-frame play.",
      "Added multiple modes, obstacles, and **persistent stats** while keeping the binary footprint and runtime costs suitable for terminal constraints.",
    ],
  }


  
];

/** Each item renders as "**Lead:** detail" — the text before the first ": " is bolded. */
export const achievementsAndActivities: string[] = [
  "IEEE PES Energy Shark Tank 2026 (18th APPEEC, Singapore): FlexGrid pitch selected among the Top 5 in the IEEE PES YP Industry Innovation Session; awarded a Certificate of Achievement for the most outstanding innovative solution and placed 3rd overall.",
  "1st Place, NST Startup Foundry 2026: Won with Jarvis, an AI-powered personal intelligence system, pitched to Google Cloud and Microsoft for Startups.",
  "Mentorship: Mentored 10+ students in Data Structures & Algorithms.",
  "IEEE Student Member (2026): Student Member in good standing.",
  "Jaipur Under-16 Cricket Team: Represented Jaipur as an opening batsman and part-time wicketkeeper.",
  "More Than Me: Volunteer supporting children in need.",
];

export const contact = {
  heading: "Get In Touch",
  subheading:
    "I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!",
  cta: "Say Hello →",
};

/** Shapes for props — `app/page.tsx` (Server Component) passes these in so edits to this file re-render the UI via fresh server output. */
export type SiteConfig = typeof siteConfig;
export type HeroContent = typeof hero;
export type AboutContent = typeof about;
export type ContactContent = typeof contact;
