export const projects = [
  {
    number: "01",
    title: "DG Vision Studio — Photography Business Website",
    context:
      "Status: Real project. Public website for a photography studio focused on business presentation, portfolio content, services and client contact.",
    solution:
      "Built as a real business website with clear information architecture, responsive frontend, reusable UI sections and structured content for photography services.",
    features: [
      "Homepage with clear business presentation",
      "Portfolio sections for visual work showcase",
      "Service-oriented content blocks",
      "Contact section with a clear contact flow",
      "Responsive layout for mobile, tablet and desktop",
      "Reusable UI sections for easier maintenance",
      "Clean navigation and content hierarchy",
      "SEO-friendly page structure",
      "Deployment-ready frontend architecture",
      "Real public project used for business presence"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://dgvisionstudio.com/",
    repositoryUrl: "https://github.com/viktor132607/DGVisionStudio.client"
  },
  {
    number: "02",
    title: "Nikola Halachev — Accounting Website",
    context:
      "Status: Real project. Corporate website for an accounting professional with service presentation, bilingual content and a structure focused on client inquiries.",
    solution:
      "Built as a professional presentation website focused on trust, service presentation and clear business communication to potential clients.",
    features: [
      "BG/EN bilingual content",
      "Accounting service presentation",
      "Professional visual hierarchy",
      "Clean navigation and service sections",
      "Responsive frontend structure",
      "Contact-oriented corporate layout"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "i18n", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://nhalachev.com/"
  },
  {
    number: "03",
    title: "PaladinHub 1.0 — Portfolio Project",
    context:
      "Status: Portfolio project. Community platform for the World of Warcraft Paladin audience, built as a .NET 8 MVC application with an account system, content modules and a Talent Tree Builder.",
    solution:
      "Portfolio full-stack project demonstrating ASP.NET Core MVC, Razor, identity flow, database work, domain modules and real application structure.",
    features: [
      "ASP.NET Core MVC architecture",
      "Razor-based UI layer",
      "Identity authentication and account system",
      "PostgreSQL database",
      "Entity Framework Core data access",
      "Talent Tree Builder module",
      "Content and discussion modules",
      "Admin-oriented workflows",
      "Docker / Render deployment setup",
      "Modular structure for easier extension"
    ],
    stack: [
      "ASP.NET Core MVC",
      ".NET 8",
      "Razor",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "Identity",
      "Docker",
      "Render"
    ],
    previewType: "screenshot",
    previewUrl: "https://paladinhub-api-d4ta.onrender.com",
    previewImage: "/projects/paladinhub-home.png",
    repositoryUrl: "https://github.com/viktor132607/PaladinHub",
    sleepNotice: "Free Render hosting may take up to 60 seconds to start."
  },
  {
    number: "04",
    title: "PaladinHub 2.0 — WIP Portfolio Project",
    context:
      "Status: WIP portfolio project. Planned modernization of PaladinHub into a separated ASP.NET Core Web API backend and standalone Next.js frontend.",
    solution:
      "WIP full-stack architecture with cleaner separation between backend and frontend, aimed at a more modern, scalable and maintainable version of the platform.",
    features: [
      "ASP.NET Core Web API backend",
      "Next.js frontend architecture",
      "TypeScript UI layer",
      "PostgreSQL persistence",
      "Entity Framework Core data layer",
      "Authentication flow",
      "REST API structure",
      "Docker-ready setup",
      "Deployment preparation",
      "Cleaner separation of concerns than the MVC version"
    ],
    stack: ["ASP.NET Core Web API", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "Docker", "Render"],
    previewType: "screenshot",
    previewUrl: "",
    previewImage: "/projects/paladinhub-home.png",
    repositoryUrl: "",
    sleepNotice: "WIP Web API + Next.js version. Live deployment and repository will be added later."
  },
  {
    number: "05",
    title: "HygiaTrade — WIP E-commerce Platform",
    context:
      "Status: WIP portfolio project. Full-stack e-commerce system for hygiene and cleaning products with separate frontend and backend archives.",
    solution:
      "WIP e-commerce platform demonstrating work on catalog flow, user flow, API architecture, authentication, data persistence and admin/business logic.",
    features: [
      "Product catalog and category structure",
      "Product details pages",
      "Shopping cart flow",
      "Checkout process",
      "Orders and order-related logic",
      "User profile screens",
      "Wishlist functionality",
      "Admin-facing screens",
      "JWT authentication and role-based access",
      "ASP.NET Core Web API + PostgreSQL backend"
    ],
    stack: ["ASP.NET Core Web API", "Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "JWT", "Docker"],
    previewType: "screenshot",
    previewUrl: "",
    previewImage: "/projects/hygiatrade-preview.png",
    repositoryUrl: ""
  }
] as const;
