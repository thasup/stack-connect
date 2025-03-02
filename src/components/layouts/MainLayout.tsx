import AppAppBar from '@/components/AppAppBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <AppAppBar />
      {children}
    </>
  );
}
