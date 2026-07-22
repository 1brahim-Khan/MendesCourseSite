import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: "Online Formation Experiences | Marhama Institute",
  description:
    "Two live online formation experiences with Shaykh Adeyinka Mendes, presented by Marhama Institute.",
  openGraph: {
    title: "Two Online Formation Experiences",
    description: "Join Shaykh Adeyinka Mendes live online, July 25–26, 2026.",
    type: "website",
    images: [{ url: "/og.png", width: 1747, height: 909, alt: "Marhama Institute online formation experiences" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Online Formation Experiences",
    description: "Join Shaykh Adeyinka Mendes live online, July 25–26, 2026.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
