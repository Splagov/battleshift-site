import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getbattleshift.com"),
  title: {
    default: "BattleShift | Mobile Hero Duel Arena on the App Store",
    template: "%s | BattleShift",
  },
  description:
    "BattleShift is a live mobile hero duel arena for iPhone and iPad with real-time PvP rooms, bot practice, heroes, towers, creeps, direct chat, friends, and community features.",
  applicationName: "BattleShift",
  keywords: [
    "BattleShift",
    "mobile hero duel arena",
    "1v1 mobile battle game",
    "PvP iPhone game",
    "hero arena iOS",
    "App Store battle game",
    "friends chat game",
    "multiplayer duel game",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://getbattleshift.com",
    title: "BattleShift | Mobile Hero Duel Arena on the App Store",
    description:
      "Real heroes, towers, creeps, direct PvP rooms, chat, friends, and community features in one focused mobile arena.",
    siteName: "BattleShift",
    images: [
      {
        url: "/assets/branding/battleshift_home_scene.png",
        width: 1200,
        height: 900,
        alt: "BattleShift live battle scene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BattleShift | Mobile Hero Duel Arena on the App Store",
    description:
      "Real heroes, direct PvP rooms, bot practice, towers, creeps, chat, friends, and community features.",
    images: ["/assets/branding/battleshift_home_scene.png"],
  },
  icons: {
    icon: "/assets/branding/battleshift_app_icon.png",
    apple: "/assets/branding/battleshift_app_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
