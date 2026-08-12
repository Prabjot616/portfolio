import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted, so next/font/local (rather than raw @font-face in CSS) buys
// us automatic preloading and a metric-matched fallback font — without
// preloading, the browser doesn't discover the font URL until it parses
// globals.css and hits text using it, which was long enough to show the
// fallback font first on every load.
const caveat = localFont({
  src: "../public/fonts/Caveat-Variable.woff2",
  variable: "--font-caveat",
  display: "swap",
});

const architectsDaughter = localFont({
  src: "../public/fonts/ArchitectsDaughter-Regular.woff2",
  variable: "--font-architects",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabjot Kaur - Lead Software Engineer",
  description: "Lead Software Engineer with 6+ years of experience in web development, e-commerce platforms, and AI technologies. Specialized in PHP, Shopify, and full-stack development.",
  keywords: ["Software Engineer", "PHP Developer", "Shopify Developer", "Full Stack Developer", "AI Development", "E-commerce"],
  authors: [{ name: "Prabjot Kaur" }],
  openGraph: {
    title: "Prabjot Kaur - Lead Software Engineer",
    description: "Lead Software Engineer specializing in web development, e-commerce, and AI technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
