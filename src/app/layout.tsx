// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'KaiZephyr',
  description: '个人网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}