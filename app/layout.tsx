import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kafin Salim | Software Engineer",
  description: "Experienced Software Engineer with expertise in full-stack development",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
