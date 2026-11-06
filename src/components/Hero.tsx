"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Terminal,
  Code2,
  Zap,
  Star,
  Activity,
  Check,
} from "lucide-react";

export default function Hero() {
  const { personal, stats } = portfolioData;

  const roles = [
    "Full-Stack Web Developer",
    "Next.js & React Specialist",
    "Performance & Bug Fixing Expert",
    "REST API & Database Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const [activeTab, setActiveTab] = useState<"code" | "bash" | "metrics">("code");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState("in");
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Animated Gradient Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-emerald-500/10 blur-[130px] pointer-events-none rounded-full animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-gradient-to-bl from-indigo-600/15 via-purple-500/10 to-blue-500/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personal.status.text}</span>
            </div>

            {/* Main Headline with Animated Role Cycler */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
              .
            </h1>

            {/* Dynamic Role Rotator with glowing highlight */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
                I am a{" "}
              </span>
              <span
                className={`ml-2 text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent transition-all duration-300 transform ${
                  fadeState === "in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                {roles[currentRoleIndex]}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Turning complex business challenges into{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                fast, high-converting Next.js applications
              </strong>
              , responsive user experiences, and scalable APIs since 2021.
            </p>

            {/* Action Buttons with 3D Hover Lift */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>Hire Me / Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>View Portfolio</span>
                <Code2 className="w-4 h-4 text-blue-500" />
              </a>

              {personal.whatsapp && (
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              )}
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Production-ready Next.js 16 &amp; React 19</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fast turnaround &amp; clean code architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SEO &amp; Core Web Vitals (95+ Lighthouse)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>14-day post-launch bug warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Portrait Showcase + Tabbed Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Profile Avatar Showcase with Floating Badges */}
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 mb-6">
              {/* Rotating Gradient Halo */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-emerald-400 to-indigo-600 opacity-75 blur-xl animate-spin-slow"
                aria-hidden="true"
              />

              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-500 shadow-2xl">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <Image
                    src={personal.avatar || "/profile.jpg"}
                    alt={personal.name}
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 300px, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-4 animate-float">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Hire</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>4+ Years Coding</span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right */}
              <div className="absolute bottom-6 -right-5 animate-float">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span>99% Performance</span>
                </div>
              </div>
            </div>

            {/* Interactive Tabbed Simulator below Avatar */}
            <div className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-xl p-4">
              {/* Tab Header with interactive toggles */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-lg text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "code"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    spec.ts
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("bash")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "bash"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    terminal
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "metrics"
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    metrics.json
                  </button>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  <Activity className="w-3 h-3" />
                  <span>online</span>
                </div>
              </div>

              {/* Tab 1: TypeScript Specs */}
              {activeTab === "code" && (
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-600 dark:text-emerald-400">&quot;{personal.name}&quot;</span>,
                  </p>
                  <p className="pl-4">
                    experience: <span className="text-amber-600 dark:text-amber-400">&quot;4+ Years (Since 2021)&quot;</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-emerald-600 dark:text-emerald-400">&quot;Ready for Contracts &amp; Roles&quot;</span>,
                  </p>
                  <p className="pl-4">
                    guarantee: <span className="text-indigo-600 dark:text-indigo-400">&quot;100% On-Time Delivery&quot;</span>
                  </p>
                  <p>&#125;;</p>
                </div>
              )}

              {/* Tab 2: Terminal Simulation */}
              {activeTab === "bash" && (
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed">
                  <p className="text-slate-400">$ next build --turbo</p>
                  <p className="text-emerald-500">✓ Compiled successfully in 800ms</p>
                  <p className="text-blue-400">✓ 5 static routes prerendered</p>
                  <p className="text-slate-400">$ vitest run</p>
                  <p className="text-emerald-500">✓ 28/28 tests passed (100%)</p>
                  <p className="text-indigo-400">$ echo &quot;Ready to ship!&quot;</p>
                </div>
              )}

              {/* Tab 3: Live Metrics */}
              {activeTab === "metrics" && (
                <div className="font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lighthouse Performance:</span>
                    <span className="text-emerald-500 font-bold">100 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Accessibility (a11y):</span>
                    <span className="text-emerald-500 font-bold">100 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average TTFB:</span>
                    <span className="text-blue-400 font-bold">&lt; 45ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Clean Code Standard:</span>
                    <span className="text-indigo-400 font-bold">Strict TypeScript</span>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-slate-500 text-xs flex items-center justify-between">
                <span>// Tap tabs to inspect specs</span>
                <a href="#services" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View packages &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row with Hover Glow */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="transform-card p-5 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-blue-500/40"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
