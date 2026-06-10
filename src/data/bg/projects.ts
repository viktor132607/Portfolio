export const projects = [
  {
    number: "01",
    title: "DG Vision Studio — сайт за фотографски бизнес",
    context:
      "Статус: реален проект. Публичен уебсайт за фотографско студио с фокус върху бизнес представяне, портфолио съдържание, услуги и контакт с клиенти.",
    solution:
      "Изграден като реален business website с ясна информационна архитектура, responsive frontend, reusable UI sections и подредено съдържание за фотографски услуги.",
    features: [
      "Начална страница с ясно business представяне",
      "Портфолио секции за визуално представяне на работата",
      "Услуги и service-oriented content blocks",
      "Контактна секция с ясен contact flow",
      "Responsive layout за mobile, tablet и desktop",
      "Reusable UI sections за лесна поддръжка",
      "Чиста навигация и ясна content hierarchy",
      "SEO-friendly page structure",
      "Deployment-ready frontend архитектура",
      "Реален публичен проект, използван за business presence"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://dgvisionstudio.com/",
    repositoryUrl: "https://github.com/viktor132607/DGVisionStudio.client"
  },
  {
    number: "02",
    title: "Никола Халачев — счетоводен уебсайт",
    context:
      "Статус: реален проект. Корпоративен сайт за счетоводен специалист с представяне на услуги, двуезично съдържание и структура, насочена към клиентски запитвания.",
    solution:
      "Изграден като професионален presentation website с фокус върху trust, service presentation и ясна бизнес комуникация към потенциални клиенти.",
    features: [
      "BG/EN двуезично съдържание",
      "Представяне на счетоводни услуги",
      "Професионална visual hierarchy",
      "Ясна навигация и service sections",
      "Responsive frontend структура",
      "Контактно-ориентиран corporate layout"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "i18n", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://nhalachev.com/"
  },
  {
    number: "03",
    title: "PaladinHub 1.0 — portfolio project",
    context:
      "Статус: portfolio проект. Community платформа за World of Warcraft Paladin аудитория, изградена като .NET 8 MVC приложение с account system, content modules и Talent Tree Builder.",
    solution:
      "Портфолио full-stack проект, показващ работа с ASP.NET Core MVC, Razor, identity flow, база данни, domain modules и real application structure.",
    features: [
      "ASP.NET Core MVC архитектура",
      "Razor-based UI слой",
      "Identity authentication и account system",
      "PostgreSQL база данни",
      "Entity Framework Core data access",
      "Talent Tree Builder модул",
      "Content и discussion modules",
      "Admin-oriented workflows",
      "Docker / Render deployment setup",
      "Модулна структура за по-лесно разширяване"
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
    title: "PaladinHub 2.0 — WIP portfolio project",
    context:
      "Статус: WIP portfolio проект. Планирана модернизация на PaladinHub към отделен ASP.NET Core Web API backend и самостоятелен Next.js frontend.",
    solution:
      "WIP full-stack архитектура с по-чисто разделение между backend и frontend, насочена към по-модерна, scalable и maintainable версия на платформата.",
    features: [
      "ASP.NET Core Web API backend",
      "Next.js frontend архитектура",
      "TypeScript UI слой",
      "PostgreSQL persistence",
      "Entity Framework Core data layer",
      "Authentication flow",
      "REST API структура",
      "Docker-ready setup",
      "Подготовка за deployment",
      "По-чиста separation of concerns спрямо MVC версията"
    ],
    stack: ["ASP.NET Core Web API", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "Docker", "Render"],
    previewType: "screenshot",
    previewUrl: "",
    previewImage: "/projects/paladinhub-home.png",
    repositoryUrl: "",
    sleepNotice: "WIP Web API + Next.js версия. Live deployment и repository ще бъдат добавени по-късно."
  },
  {
    number: "05",
    title: "HygiaTrade — WIP e-commerce platform",
    context:
      "Статус: WIP portfolio проект. Full-stack e-commerce система за хигиенни и почистващи продукти с отделни frontend и backend архиви.",
    solution:
      "WIP e-commerce платформа, която показва работа по каталог, потребителски flow, API architecture, authentication, data persistence и admin/business logic.",
    features: [
      "Product catalog и category structure",
      "Product details pages",
      "Shopping cart flow",
      "Checkout процес",
      "Orders и order-related logic",
      "User profile screens",
      "Wishlist функционалност",
      "Admin-facing screens",
      "JWT authentication и role-based access",
      "ASP.NET Core Web API + PostgreSQL backend"
    ],
    stack: ["ASP.NET Core Web API", "Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "JWT", "Docker"],
    previewType: "screenshot",
    previewUrl: "",
    previewImage: "/projects/hygiatrade-preview.png",
    repositoryUrl: ""
  }
] as const;
