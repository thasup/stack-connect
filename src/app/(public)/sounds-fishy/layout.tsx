import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sounds Fishy",
  description: "A bluffing trivia game where players guess the real answer hidden among fakes!"
};

export default function SoundsFishyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
