"use client";

import { portfolioData, Service } from "@/data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import {
  Layout,
  Zap,
  Database,
  Code2,
  Check,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Services({
  onSelectService,
}: {
  onSelectService?: (serviceTitle: string) => void;
}) {
  const { services } = portfolioData;

  const getIcon = (type: Service["icon"]) => {
    switch (type) {
      case "layout":
        return <Layout className="w-6 h-6 text-blue-500" />;
      case "zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      case "database":
        return <Database className="w-6 h-6 text-emerald-500" />;
      case "code":
      default:
        return <Code2 className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Monetization &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Services &amp; Packages Tailored for Fast Delivery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Transparent pricing, clearly defined deliverables, and rapid turnarounds so your project launches without endless delays.
          </p>
        </div>

        {/* Services Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              spotlightColor={service.popular ? "rgba(59, 130, 246, 0.22)" : "rgba(99, 102, 241, 0.14)"}
              className={`p-6 flex flex-col justify-between ${
                service.popular
                  ? "border-2 border-blue-500 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5"
                  : "shadow-sm hover:shadow-xl"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wider shadow-md z-20">
                  Most Requested
                </div>
              )}

              <div>
                {/* Header with Icon & Title */}
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200/60 dark:border-slate-700/60">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price & Turnaround */}
                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">From</span>
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {service.startingPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Turnaround: {service.deliveryTime}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(service.title);
                  }
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  service.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-slate-200"
                }`}
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
