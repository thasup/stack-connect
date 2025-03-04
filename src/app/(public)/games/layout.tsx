import type { Metadata } from "next";

import CommonLayout from "@/components/layouts/CommonLayout";

export const metadata: Metadata = {
  title: "Games Library",
  description: "A collection of games for you to play!"
};

export default function GamesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommonLayout>
      {children}
    </CommonLayout>
  );
}
