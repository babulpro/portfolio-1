import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.headline}`,
  description: portfolioData.personal.subheadline,
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer for Hire",
    "Freelance Web Developer",
    portfolioData.personal.name,
  ],
  authors: [{ name: portfolioData.personal.name }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: `${portfolioData.personal.name} - Full-Stack Web Developer`,
    description: portfolioData.personal.subheadline,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = storedTheme === 'dark' || (!storedTheme && supportDarkMode);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    const meta = document.querySelector('meta[name="color-scheme"]');
                    if (meta) meta.content = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    const meta = document.querySelector('meta[name="color-scheme"]');
                    if (meta) meta.content = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
