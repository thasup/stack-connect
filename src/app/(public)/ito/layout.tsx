import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITO",
  description: "A clever ranking game where players use creative hints to organize hidden numbers in order!"
};

export default function ItoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
