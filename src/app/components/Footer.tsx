"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full py-4 mt-auto bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Link 
          href="https://beian.miit.gov.cn/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          蒙ICP备2025023586号-1
        </Link>
      </div>
    </footer>
  );
}