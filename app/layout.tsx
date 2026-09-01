import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.csdenterprise.com";
const heroImageStyle = {
  "--hero-image": `url("${basePath}/images/csd-hero.png")`,
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CSD Enterprise | Skills, Creativity & Delivery",
  description: "CSD Enterprise provides industrial training, AI generative, graphic design, video and music generation, and general contracting services from Port Harcourt, Nigeria.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "CSD Enterprise | Skills, Creativity & Delivery",
    description: "Training, AI generative, design, media, and contracting services from Port Harcourt, Nigeria.",
    url: siteUrl,
    siteName: "CSD Enterprise",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CSD Enterprise — Skills, Creativity & Delivery" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSD Enterprise | Skills, Creativity & Delivery",
    description: "Training, AI generative, design, media, and contracting services from Port Harcourt, Nigeria.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={heroImageStyle}>{children}</body>
    </html>
  );
}
