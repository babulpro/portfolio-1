"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SpotlightCard from "./SpotlightCard";

interface ContactProps {
  prefilledService?: string;
  prefilledQuote?: string;
}

export default function Contact({ prefilledService, prefilledQuote }: ContactProps) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const getCustomWhatsAppUrl = () => {
    let msg = `Hi ${personal.name}, I found your portfolio and would like to discuss a project.`;
    if (prefilledQuote) {
      msg = `Hi ${personal.name}, I calculated a project estimate on your portfolio: ${prefilledQuote}. Are you available to chat?`;
    } else if (prefilledService) {
      msg = `Hi ${personal.name}, I am interested in booking your ${prefilledService} package.`;
    }
    return `https://wa.me/8801920987588?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-emerald-500/10 to-indigo-500/15 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/60 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Instant Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            No endless forms or delays. Reach me directly through WhatsApp, Email, or Phone for an immediate response.
          </p>
        </div>

        {/* Dynamic Pre-filled Banner if a package/quote is active */}
        {(prefilledService || prefilledQuote) && (
          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-slate-900 dark:text-white">Selected Inquiry:</span>{" "}
                <span className="text-slate-700 dark:text-slate-300">
                  {prefilledQuote || `Package: ${prefilledService}`}
                </span>
              </div>
            </div>
            <a
              href={getCustomWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:scale-105 transition-all shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send via WhatsApp</span>
            </a>
          </div>
        )}

        {/* High-Impact Direct Connect Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Channel 1: WhatsApp (Primary / Most Prominent) */}
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.2)"
            className="p-8 flex flex-col justify-between border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-xl shadow-emerald-500/5 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="relative p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Instant WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Connect directly on WhatsApp for real-time discussions, project quotes, and quick technical consultations.
              </p>
            </div>

            <a
              href={getCustomWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </SpotlightCard>

          {/* Channel 2: Direct Email */}
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.2)"
            className="p-8 flex flex-col justify-between shadow-sm hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/15 text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Direct Inbox
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Email Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Send your RFP, job opportunity, or project details directly to my inbox with guaranteed reply within 12h.
              </p>

              {/* Email Address with 1-click copy */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {personal.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="w-full py-3.5 px-5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{copiedEmail ? "Email Copied!" : "Launch Email Client"}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </SpotlightCard>

          {/* Channel 3: Direct Phone / Call */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.2)"
            className="p-8 flex flex-col justify-between shadow-sm hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                  Voice &bull; Urgent
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Direct Call
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Have an urgent bug, production deployment issue, or deadline? Call directly for immediate assistance.
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {personal.phone}
                </span>
                <span className="text-xs text-slate-400">Available</span>
              </div>
            </div>

            <a
              href={`tel:${personal.phone}`}
              className="w-full py-3.5 px-5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly</span>
            </a>
          </SpotlightCard>
        </div>

        {/* Secondary Info & Socials Banner */}
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Location & Timezone */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Location &amp; Timezone</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Bangladesh (UTC+6) &bull; Remote Global
              </div>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shrink-0">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">GitHub Repos</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  github.com/babulpro
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">LinkedIn Network</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  Babul Hossain
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
          </a>
        </div>

        {/* Quality Guarantee Callout */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center gap-3 text-center">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-emerald-950 dark:text-emerald-300">
            <strong>100% Commitment Guarantee:</strong> Transparent milestones, clean Git commits, responsive mobile testing, and 14 days of free post-launch bug fixes.
          </p>
        </div>
      </div>
    </section>
  );
}
