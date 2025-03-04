import LobbyLayout from "@/components/layouts/LobbyLayout";

export default function ItoLobbyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LobbyLayout backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741437/central/landscape/alex-mesmer-kRMKxda6aM0-unsplash_ozttwe.jpg">
      {children}
    </LobbyLayout>
  );
}
