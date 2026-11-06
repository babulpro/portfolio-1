"use client";

import { portfolioData } from "@/data/portfolioData";
import { Code, Server, Wrench, Sparkles, CheckCircle } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-blue-500" />;
      case 1:
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 2:
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Modern Tech Stack &amp; Development Toolkit
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive, industry-standard stack fine-tuned for rapid prototyping, robust type-safety, and seamless scalability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list with bar */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Continuous practice, production testing &amp; modern best practices.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
