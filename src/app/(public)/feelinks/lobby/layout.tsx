import LobbyLayout from "@/components/layouts/LobbyLayout";

export default function  FeelinksLobbyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LobbyLayout backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741438/central/landscape/justin-bisson-beck-YwFHhIgG77M-unsplash_iljp5o.jpg">
      {children}
    </LobbyLayout>
  );
}
