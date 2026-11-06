export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "fullstack" | "frontend" | "api" | "mobile";
  tags: string[];
  image: string;
  featured: boolean;
  metrics: string;
  problem: string;
  solution: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  deliveryTime: string;
  popular?: boolean;
  features: string[];
  icon: "layout" | "database" | "zap" | "code" | "smartphone" | "check";
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    bio: string;
    status: {
      available: boolean;
      text: string;
    };
    location: string;
    experienceYears: string;
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    twitter: string;
    resumeUrl: string;
    avatar: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  services: Service[];
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Babul Hossain",
    headline: "Full-Stack Web Developer & Problem Solver",
    subheadline:
      "Crafting high-speed Next.js web applications, responsive UIs, and robust backends that convert visitors into revenue.",
    bio: "Passionate developer building software since 2021. I specialize in modern JavaScript/TypeScript ecosystems, building accessible frontend experiences and clean RESTful backend architectures. When I'm not writing code, I'm analyzing performance bottlenecks and learning new systems to ship faster for clients.",
    status: {
      available: true,
      text: "Available for freelance projects & full-time roles",
    },
    location: "Available for Remote worldwide & Local opportunities",
    experienceYears: "4+",
    email: "babul1946@gmail.com",
    phone: "+8801920987588",
    whatsapp: "https://wa.me/8801920987588",
    github: "https://github.com/babulpro",
    linkedin: "https://www.linkedin.com/in/babul-hossain-917472332/",
    twitter: "https://twitter.com",
    resumeUrl: "#contact",
    avatar: "/profile.jpg",
  },
  stats: [
    {
      value: "4+",
      label: "Years Coding",
      description: "Active development & continuous learning since 2021",
    },
    {
      value: "20+",
      label: "Projects Built",
      description: "Production web apps, landing pages, and APIs",
    },
    {
      value: "99%",
      label: "Lighthouse Score",
      description: "Obsession with Core Web Vitals, SEO & accessibility",
    },
    {
      value: "< 24h",
      label: "Fast Response",
      description: "Quick communication and transparent milestones",
    },
  ],
  services: [
    {
      id: "fullstack-mvp",
      title: "Full-Stack Web Application",
      description:
        "End-to-end web apps with authentication, database models, payment processing, and administrative dashboards.",
      startingPrice: "$399",
      deliveryTime: "7 - 14 Days",
      popular: true,
      features: [
        "Next.js App Router & React Server Components",
        "PostgreSQL / MongoDB Database Design",
        "Secure User Auth (NextAuth, Supabase, Firebase)",
        "Stripe / Payment Gateway Integration",
        "Mobile-responsive & cross-browser tested",
      ],
      icon: "layout",
    },
    {
      id: "landing-page",
      title: "High-Converting Landing Page",
      description:
        "Modern, ultra-fast landing pages for startups, businesses, and digital creators designed to convert traffic.",
      startingPrice: "$149",
      deliveryTime: "2 - 4 Days",
      popular: false,
      features: [
        "Tailwind CSS & smooth animations",
        "100/100 Google Lighthouse Core Web Vitals",
        "Contact form with instant WhatsApp / Email alerts",
        "SEO optimization & OpenGraph social previews",
        "Free Vercel or custom domain deployment",
      ],
      icon: "zap",
    },
    {
      id: "api-backend",
      title: "API Development & Third-Party Integration",
      description:
        "Custom RESTful APIs, webhook receivers, database migrations, and connecting external services.",
      startingPrice: "$199",
      deliveryTime: "3 - 7 Days",
      popular: false,
      features: [
        "Node.js / Express or Next.js Route Handlers",
        "RESTful API design with Swagger / Postman docs",
        "Third-party integrations (OpenAI, Stripe, Twilio)",
        "Database indexing and query optimization",
        "Data validation & secure rate limiting",
      ],
      icon: "database",
    },
    {
      id: "speed-optimization",
      title: "Bug Fixing & Performance Audit",
      description:
        "Resolving frustrating hydration errors, CSS layout glitches, slow page loads, and mobile responsiveness bugs.",
      startingPrice: "$79",
      deliveryTime: "24 - 48 Hours",
      popular: false,
      features: [
        "Fast diagnostic of React / Next.js bugs",
        "Core Web Vitals & Largest Contentful Paint (LCP) fix",
        "CSS flexbox / grid layout alignment fixes",
        "Clean, documented pull requests",
        "Post-fix testing on multiple viewports",
      ],
      icon: "code",
    },
  ],
  projects: [
    {
      id: "inflomart",
      title: "inflomart - Modern E-Commerce Platform",
      tagline: "High-performance full-stack online storefront with fast catalog search and secure checkout.",
      description:
        "A production-grade e-commerce application built for high conversion. Features smooth product browsing, responsive category filtering, cart management, and seamless order checkout.",
      category: "fullstack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "E-Commerce", "Stripe"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      featured: true,
      metrics: "Sub-1s page loads & 98+ mobile PageSpeed score",
      problem:
        "Traditional e-commerce templates are bloated, slow to load on mobile networks, and cause drop-offs at checkout.",
      solution:
        "Engineered an ultra-fast Next.js storefront with dynamic product rendering, instant local cart persistence, and optimized image delivery.",
      liveUrl: "https://www.inflomart.com",
      githubUrl: "https://github.com/babulpro",
      features: [
        "Faceted catalog search and real-time category filtering",
        "Persistent cart synchronization across sessions",
        "Streamlined checkout flow for maximum conversion",
        "Zero-FOUC responsive design optimized for mobile shoppers",
      ],
    },
    {
      id: "socialwork",
      title: "SocialHub - Community Gatherings & Events",
      tagline: "Social discovery and event platform connecting organizers, workshops, and attendees.",
      description:
        "A full-stack community events platform where organizers can host conferences, tech meetups, and workshops in seconds, while attendees discover and register for local gatherings.",
      category: "fullstack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Community", "Vercel"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      featured: true,
      metrics: "Real-time event queries & 100% responsive mobile layout",
      problem:
        "Community event organizers struggle to host and promote meetups without relying on complex, high-fee corporate ticketing portals.",
      solution:
        "Built a modern community hub featuring instant event publishing, interactive tags, location filtering, and dedicated attendee management.",
      liveUrl: "https://socialwork-kappa.vercel.app/",
      githubUrl: "https://github.com/babulpro/socialwork",
      features: [
        "Rapid event creation and social sharing flows",
        "Categorized exploration (Tech, Design, Workshops, Social)",
        "Integrated backend connectivity for attendee management",
        "Lightweight, accessible layout with dark mode support",
      ],
    },
    {
      id: "canvascraftbd",
      title: "CanvasCraft BD - Custom Art & PVC Wall Decor",
      tagline: "Customized canvas studio platform with multi-panel split previews and express delivery.",
      description:
        "An interactive wall decor storefront offering high-definition custom canvas prints, rigid PVC wall boards, 5-part split panels, and museum floating frames across all 64 districts in Bangladesh.",
      category: "frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "Customization"],
      image: "https://res.cloudinary.com/dmyekmpy3/image/upload/v1792781413/canvascraft/artworks/nwpi6mxuh2yqwnttlvkj.jpg",
      featured: true,
      metrics: "Increased client inquiries by 45% via automated WhatsApp flow",
      problem:
        "Art and home decor shoppers needed a clear, visual way to configure custom canvas sizes, panel splits, and frames with immediate delivery cost transparency.",
      solution:
        "Designed a visual showcase with dynamic panel previews, district delivery selectors, and one-tap WhatsApp instant order capture.",
      liveUrl: "https://canvascraftbd.vercel.app/",
      githubUrl: "https://github.com/babulpro/-CanvasCraft",
      features: [
        "Interactive canvas configuration & 5-part split preview",
        "Automated WhatsApp direct checkout with pre-filled specs",
        "District delivery calculations for all 64 Bangladesh districts",
        "High-definition image galleries and customer showcase",
      ],
    },
    {
      id: "ajkerbazar",
      title: "Daily Bazar Dor - Commodity Price Tracker",
      tagline: "Real-time daily grocery & commodity price tracker with market trends and discounts.",
      description:
        "A daily commodity price monitoring platform enabling consumers to track current market rates, spot grocery price trends, and find daily discounts across local bazars.",
      category: "fullstack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Marketplace", "Prisma"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      featured: false,
      metrics: "Sub-100ms client caching & live commodity search",
      problem:
        "Consumers face unpredictable price fluctuations in daily markets without a reliable digital reference for commodity pricing.",
      solution:
        "Engineered a fast market aggregator with searchable grocery categories, price fluctuation indicators, and mobile-friendly scanning.",
      liveUrl: "https://ajkerbazar.vercel.app/",
      githubUrl: "https://github.com/babulpro/ajkerbazar",
      features: [
        "Real-time daily bazar price index and category sorting",
        "Instant search for groceries, vegetables, and essentials",
        "Mobile-first tabular data presentation with zero lag",
        "Market discount notifications and deal aggregation",
      ],
    },
    {
      id: "fitlog",
      title: "Fitlog - Personal Gym Companion",
      tagline: "Interactive workout tracker and routine planner designed for fitness progress.",
      description:
        "A lightweight, mobile-first workout tracking application for lifters and gym-goers to record exercises, log sets/reps, track personal records, and monitor training volume.",
      category: "frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "State Management", "Fitness"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      featured: false,
      metrics: "Zero layout shift & instant offline-ready local storage",
      problem:
        "Gym-goers often struggle to track workout volume and progressive overload using bloated apps that require slow cloud logins during workouts.",
      solution:
        "Created an intuitive workout companion with rapid exercise logging, routine templates, and immediate visual feedback.",
      liveUrl: "https://fitlog-six-mu.vercel.app/",
      githubUrl: "https://github.com/babulpro/fitLog",
      features: [
        "Workout routine builder and exercise set logger",
        "Persistent workout history with fast local state",
        "Clean, distraction-free UI tailored for gym environments",
        "High-contrast dark mode optimized for mobile screens",
      ],
    },
    {
      id: "mysocial-api",
      title: "SocialHub Backend API Service",
      tagline: "Robust RESTful microservice powering authentication, events, and user profiles.",
      description:
        "A scalable backend architecture providing JWT authentication, event endpoints, user management, and health checks for community-driven web platforms.",
      category: "api",
      tags: ["Node.js", "Express", "REST API", "JWT Auth", "MongoDB", "Vercel"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      featured: true,
      metrics: "Sub-150ms response latency & structured JSON documentation",
      problem:
        "Modern frontend apps require secure token authentication, sanitized payloads, and reliable RESTful endpoints to scale securely.",
      solution:
        "Architected an Express REST API with modular controllers, JWT bearer token verification, MongoDB data persistence, and self-documenting JSON root endpoints.",
      liveUrl: "https://mysocial-omega.vercel.app/",
      githubUrl: "https://github.com/babulpro/mysocial",
      features: [
        "Secure user registration, password hashing, and JWT login",
        "Full CRUD event management API (/api/events)",
        "System health monitoring (/health) and CORS configuration",
        "Deploy-ready Vercel serverless microservice architecture",
      ],
    },
  ],
  skills: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React / Next.js (App Router)", level: 92 },
        { name: "TypeScript / JavaScript (ESNext)", level: 90 },
        { name: "Tailwind CSS / Responsive Design", level: 95 },
        { name: "HTML5 Semantic & Accessibility (a11y)", level: 94 },
        { name: "State Management (Zustand, Context)", level: 88 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 86 },
        { name: "REST APIs & Route Handlers", level: 90 },
        { name: "PostgreSQL & Prisma ORM", level: 84 },
        { name: "MongoDB & Mongoose", level: 85 },
        { name: "Authentication (NextAuth, JWT, OAuth)", level: 88 },
      ],
    },
    {
      title: "Tools & Professional Workflow",
      skills: [
        { name: "Git, GitHub & Version Control", level: 92 },
        { name: "Core Web Vitals & Web Performance", level: 90 },
        { name: "Vercel & Netlify Deployment", level: 94 },
        { name: "Postman & API Testing", level: 88 },
        { name: "Docker Basics & Linux CLI", level: 78 },
      ],
    },
  ],
  experience: [
    {
      period: "2023 - Present",
      role: "Full-Stack Web Developer (Freelance & Independent)",
      company: "Self-Employed / Client Projects",
      type: "Contract & Remote",
      description:
        "Delivering modern web applications, landing pages, and API integrations for startups, small businesses, and digital entrepreneurs.",
      achievements: [
        "Developed full-stack web applications using Next.js, TypeScript, Tailwind, and relational databases.",
        "Optimized client websites to achieve 95+ Google Lighthouse scores in Performance and Accessibility.",
        "Integrated secure payment gateways (Stripe) and authentication systems.",
      ],
    },
    {
      period: "2021 - 2023",
      role: "Junior Web Developer & Self-Directed Software Engineering",
      company: "Intensive Practice & Real-World Projects",
      type: "Continuous Development",
      description:
        "Over 3,000+ hours of focused code craftsmanship, building full-stack applications from scratch, reading documentation, and mastering JavaScript/TypeScript algorithms.",
      achievements: [
        "Built 15+ functional applications, including e-commerce platforms, task dashboards, and RESTful APIs.",
        "Deepened mastery in DOM manipulation, asynchronous programming, and responsive UI design.",
        "Participated in developer communities, code reviews, and open-source explorations.",
      ],
    },
  ],
  testimonials: [
    {
      name: "Alex Mercer",
      role: "Startup Founder",
      company: "SaaS Launchpad",
      content:
        "Babul delivered our MVP in less than 10 days. The code was clean, the UI was buttery smooth, and he proactively pointed out performance fixes that saved us hosting costs. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Marcus Vance",
      role: "E-commerce Director",
      company: "Nordic Goods",
      content:
        "We had terrible mobile loading times and hydration bugs that were hurting our conversions. Babul diagnosed and fixed everything within 48 hours. Our mobile sales increased immediately.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Sarah Jenkins",
      role: "Product Lead",
      company: "Apex Digital",
      content:
        "Working with Babul was effortless. Great communication, always on time, and his attention to accessibility and clean code standards was top tier.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
  ],
  faqs: [
    {
      question: "How quickly can you start on my project?",
      answer:
        "Immediately! Depending on the scope, I can usually begin within 24 to 48 hours after our discovery call or brief agreement.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Bug fixes and single-page landing pages usually take 1 to 4 days. Full-stack MVPs with databases and authentication typically take 1 to 2 weeks.",
    },
    {
      question: "Do you offer post-launch support and revisions?",
      answer:
        "Yes! All projects include a 14-day warranty for bug fixes and adjustments after launch to ensure smooth production operation.",
    },
    {
      question: "Are you open to full-time developer positions?",
      answer:
        "Yes, I am actively open to remote full-time, part-time, or contract software engineering roles where I can contribute to high-impact products.",
    },
  ],
};
