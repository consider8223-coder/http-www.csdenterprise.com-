import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.csdenterprise.com"),
  title: "CSD Enterprise | Skills, Creativity & Delivery",
  description: "CSD Enterprise provides industrial training, AI generative, graphic design, video and music generation, and general contracting services from Port Harcourt, Nigeria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "CSD Enterprise | Skills, Creativity & Delivery",
    description: "Training, AI generative, design, media, and contracting services from Port Harcourt, Nigeria.",
    url: "/",
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
      <body>{children}</body>
    </html>
  );
}
