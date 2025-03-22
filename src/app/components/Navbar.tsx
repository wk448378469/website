// src/app/components/Navbar.tsx
"use client";

import { FaGithub, FaWeibo } from 'react-icons/fa';
import { SiXiaohongshu, SiBilibili } from "react-icons/si";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };
  
  const navItems = {
    zh: ['首页', '服务', '项目', '喜好'],
    en: ['Home', 'Services', 'Projects', 'Favorites']
  };
  
  const getHref = (item: string): string => {
    if (item === '首页' || item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm text-[#384151]">
      {/* Logo and Navigation in a more compact grouping */}
      <div className="flex items-center pl-40">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer mr-10">KaiZephyr</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems[language].map((item, index) => (
            <Link href={getHref(item)} key={index}>
              <span className="transition-colors cursor-pointer font-medium hover:opacity-70">
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Right section - Social icons and language toggle */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-5">
          <a href="https://bilibili.com" target="_blank" rel="noopener noreferrer" className="text-[#384151] hover:text-[#FB7299]">
            <SiBilibili size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#384151] hover:text-black">
            <FaGithub size={20} />
          </a>
          <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" className="text-[#384151] hover:text-red-500">
            <FaWeibo size={20} />
          </a>
          <a href="https://xiaohongshu.com" target="_blank" rel="noopener noreferrer" className="text-[#384151] hover:text-red-600">
            <SiXiaohongshu size={20} />
          </a>
        </div>
        
        {/* Language toggle */}
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-[#384151]"
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
      
      {/* Mobile menu button - can be expanded later */}
      <div className="md:hidden">
        {/* Add mobile menu button here */}
      </div>
    </header>
  );
};

export default Navbar;