import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticlesBackground } from "@/components/particles-background";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Kafin Salim | Full Stack Developer",
  description: "Frontend focused Full-stack developer",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fallback script for animations
              document.addEventListener('DOMContentLoaded', function() {
                // Intersection Observer for data-animate elements
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('in-view');
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.1 });

                // Observe all [data-animate] elements
                document.querySelectorAll('[data-animate]').forEach(el => {
                  observer.observe(el);
                });

                // For older browsers or as fallback for animate-on-scroll
                document.querySelectorAll('.animate-on-scroll').forEach(function(element) {
                  observer.observe(element);
                  element.addEventListener('intersect', function() {
                    element.classList.add('is-visible');
                  });
                });
              });
            `,
          }}
        />
      </head>
      <body className={robotoSlab.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesBackground />
          <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
