import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kafin Salim | Tech Lead & Fullstack Engineer",
  description:
    "Tech Lead & Fullstack Engineer with 7+ years of experience building products. Currently leading engineering at Fokuslah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
