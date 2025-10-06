import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className={`${className}`}>
        {children}
      </main>
    </div>
  );
}