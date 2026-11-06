"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CostEstimator from "@/components/CostEstimator";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedQuote, setSelectedQuote] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSelectedQuote("");
  };

  const handleQuoteSelected = (quoteSummary: string) => {
    setSelectedQuote(quoteSummary);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <TechMarquee />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <CostEstimator onQuoteSelected={handleQuoteSelected} />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact
          prefilledService={selectedService}
          prefilledQuote={selectedQuote}
        />
      </main>
      <Footer />
    </div>
  );
}
