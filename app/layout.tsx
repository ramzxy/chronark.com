import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "rmxzy",
    template: "%s | rmxzy.com",
  },
  description: "Software Engineer and Hacker",
  openGraph: {
    title: "rmxzy",
    description:
      "Software Engineer and Hacker",
    url: "https://rmxzy.com",
    siteName: "rmxzy",
    images: [
      {
        url: "https://rmxzy.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "rmxzy",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black bg-[url('/background.png')] bg-cover bg-fixed bg-center ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <div className="relative z-0 min-h-screen w-full">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-lg z-0"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}