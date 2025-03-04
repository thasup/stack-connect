import LobbyLayout from "@/components/layouts/LobbyLayout";

export default function SoundsFishyLobbyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LobbyLayout backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741434/central/landscape/tim-stief-YFFGkE3y4F8-unsplash_cbbwzg.jpg">
      {children}
    </LobbyLayout>
  );
}
