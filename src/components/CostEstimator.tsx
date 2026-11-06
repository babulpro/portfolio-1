"use client";

import { useState } from "react";
import { Calculator, Check, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface CostEstimatorProps {
  onQuoteSelected?: (quoteSummary: string) => void;
}

export default function CostEstimator({ onQuoteSelected }: CostEstimatorProps) {
  const [baseType, setBaseType] = useState<"landing" | "fullstack" | "fix" | "api">("landing");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isExpedited, setIsExpedited] = useState<boolean>(false);

  const baseOptions = [
    {
      id: "landing",
      name: "High-Speed Landing Page",
      price: 149,
      days: 3,
      desc: "Responsive marketing page, SEO & WhatsApp capture",
    },
    {
      id: "fullstack",
      name: "Full-Stack Web App MVP",
      price: 399,
      days: 10,
      desc: "Custom database, backend APIs, responsive Next.js frontend",
    },
    {
      id: "api",
      name: "API / Third-Party Integration",
      price: 199,
      days: 5,
      desc: "REST endpoints, webhooks, or third-party service connections",
    },
    {
      id: "fix",
      name: "Performance & Bug Fixing",
      price: 79,
      days: 2,
      desc: "Fix hydration issues, CSS bugs, and speed bottlenecks",
    },
  ];

  const addonsList = [
    { id: "auth", name: "User Auth & Roles (NextAuth/OAuth)", price: 89, days: 2 },
    { id: "payments", name: "Stripe Checkout / Subscriptions", price: 99, days: 2 },
    { id: "database", name: "PostgreSQL/MongoDB Schema Design", price: 89, days: 1 },
    { id: "seo", name: "Comprehensive SEO & OpenGraph Setup", price: 49, days: 1 },
    { id: "analytics", name: "Google Analytics & Event Tracking", price: 39, days: 1 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedBase = baseOptions.find((o) => o.id === baseType)!;
  const addonsCost = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);
  const addonsDays = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find((a) => a.id === id);
    return acc + (item ? item.days : 0);
  }, 0);

  const expeditedCost = isExpedited ? 99 : 0;
  const totalPrice = selectedBase.price + addonsCost + expeditedCost;
  const totalDays = Math.max(1, isExpedited ? Math.ceil((selectedBase.days + addonsDays) * 0.6) : selectedBase.days + addonsDays);

  const handleInquire = () => {
    const selectedAddonNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const summary = `Selected: ${selectedBase.name} ($${selectedBase.price})${
      selectedAddonNames ? ` + Add-ons: [${selectedAddonNames}]` : ""
    }${isExpedited ? " (Expedited Rush)" : ""} => Estimated: $${totalPrice} (~${totalDays} days)`;

    if (onQuoteSelected) {
      onQuoteSelected(summary);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Calculate Your Project Scope &amp; Budget
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            No guessing games or opaque invoices. Select what you need for an instant transparent price and delivery timeframe estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Type */}
            <fieldset className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <legend className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 px-1">
                1. Select Core Service Type
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {baseOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 text-left flex flex-col justify-between ${
                      baseType === opt.id
                        ? "border-blue-500 bg-blue-50/70 dark:bg-blue-950/50 ring-2 ring-blue-500/50 scale-[1.01]"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">
                        {opt.name}
                      </span>
                      <input
                        type="radio"
                        name="base_project_type"
                        value={opt.id}
                        checked={baseType === opt.id}
                        onChange={() => setBaseType(opt.id as any)}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-2">
                      {opt.desc}
                    </span>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      From ${opt.price} &bull; ~{opt.days} days
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Step 2: Add-on Capabilities */}
            <fieldset className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <legend className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 px-1">
                2. Optional Add-ons &amp; Integrations
              </legend>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`cursor-pointer flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        checked
                          ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 ring-1 ring-blue-500/40"
                          : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddon(addon.id)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        +${addon.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Step 3: Priority Expedited Option */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  id="expedited"
                  type="checkbox"
                  checked={isExpedited}
                  onChange={(e) => setIsExpedited(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="expedited" className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
                  Priority Fast-Track Delivery (40% faster turnaround)
                </label>
              </div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                +$99
              </span>
            </div>
          </div>

          {/* Result Summary Card (Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl border-2 border-blue-500 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Live Calculation
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Estimated Investment
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 animate-pulse">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Price Display with animated count transition */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                    ${totalPrice}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    USD flat estimate
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <Zap className="w-4 h-4 animate-bounce" />
                  <span>Estimated Timeframe: ~{totalDays} business days</span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex justify-between">
                  <span>Base: {selectedBase.name}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">${selectedBase.price}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between">
                    <span>{selectedAddons.length} Add-on(s) selected</span>
                    <span className="font-semibold text-slate-900 dark:text-white">+${addonsCost}</span>
                  </div>
                )}
                {isExpedited && (
                  <div className="flex justify-between text-amber-600 dark:text-amber-400">
                    <span>Priority Fast-Track Delivery</span>
                    <span className="font-semibold">+$99</span>
                  </div>
                )}
              </div>

              {/* Guarantee Pill */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 mb-6 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Includes 14 days of free post-launch bug fixes, responsive viewport testing, and deployment to your domain/hosting.
                </p>
              </div>

              {/* CTA button with hover scale */}
              <a
                href="#contact"
                onClick={handleInquire}
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Lock in This Estimate &amp; Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
