import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
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
      className={`${spaceGrotesk.variable} ${spaceGrotesk.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
