import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feelinks",
  description: "a board game designed to encourage emotional expression and empathy"
};

export default function FeelinksLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
