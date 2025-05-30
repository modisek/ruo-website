
import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopContactBar from '@/components/layout/TopContactBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopContactBar />
      <Navbar />
      <main className="flex-grow pt-[calc(20px+80px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
