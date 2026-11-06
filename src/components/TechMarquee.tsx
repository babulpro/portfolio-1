"use client";

import {
  Code2,
  Database,
  Layers,
  Cpu,
  Globe,
  Zap,
  Terminal,
  Server,
  Shield,
  CreditCard,
  Flame,
} from "lucide-react";

export default function TechMarquee() {
  const techStack = [
    { name: "Next.js 16 App Router", icon: Globe, color: "text-blue-500" },
    { name: "React 19 Server Components", icon: Layers, color: "text-cyan-400" },
    { name: "TypeScript 5.x", icon: Code2, color: "text-indigo-400" },
    { name: "Tailwind CSS v4", icon: Flame, color: "text-sky-400" },
    { name: "Node.js & Express", icon: Server, color: "text-emerald-500" },
    { name: "PostgreSQL & Prisma", icon: Database, color: "text-blue-400" },
    { name: "MongoDB & Mongoose", icon: Database, color: "text-green-500" },
    { name: "Stripe Payment Gateway", icon: CreditCard, color: "text-purple-400" },
    { name: "REST APIs & Webhooks", icon: Cpu, color: "text-amber-400" },
    { name: "Docker & Linux CLI", icon: Terminal, color: "text-blue-500" },
    { name: "Core Web Vitals & SEO", icon: Zap, color: "text-yellow-400" },
    { name: "NextAuth & Security", icon: Shield, color: "text-rose-400" },
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-slate-50/40 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      {/* Edge gradient fade masks for smooth infinite look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-4">
        {/* First set */}
        {techStack.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.name}</span>
            </div>
          );
        })}

        {/* Duplicate set for seamless infinite loop */}
        {techStack.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
