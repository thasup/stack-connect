import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'

import theme from "@/theme";
import "./globals.css";

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "Stack Connect | Play, Connect, Grow",
  description:
    "Stack Connect is your go-to platform for collaborative, creative, and team-building games. Play with friends, strengthen trust, and unlock new levels of fun and connection.",
  creator: "thasup",
  keywords: [
    "Stack Connect",
    "Play",
    "Connect",
    "Grow",
    "collaborative games",
    "team-building",
    "trust-building",
    "social gaming",
    "AI-powered creativity",
    "interactive fun"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <GoogleAnalytics gaId="G-D0ZVT7CRGV" />
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
