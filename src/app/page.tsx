"use client";

import { useLanguage } from './context/LanguageContext';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from 'next/image';
import { FaPython } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { SiNotion } from 'react-icons/si';
import { FaRobot, FaRegLightbulb } from 'react-icons/fa';

export default function Home() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      intro: "王凯（网名 KaiZephyr）👨‍💻 混迹互联网多年 | 🤖 提示词工程师 | 🧠 INTJ | 🌊 同喧嚣保持着距离"
    },
    en: {
      intro: "Wang Kai (aka KaiZephyr) 👨‍💻 Internet veteran | 🤖 Prompt Engineer | 🧠 INTJ | 🌊 Keeping distance from the noise"
    }
  };

  return (
    <div className="relative flex h-[calc(100vh-68px)] w-full flex-col items-center justify-center overflow-hidden bg-white">
      <div className="relative h-[500px] w-full flex items-center justify-center">
        {/* Outer orbit */}
        <OrbitingCircles iconSize={40} radius={200}>
          <FaPython className="text-[#3776AB] w-6 h-6" />
          
          <div className="overflow-hidden rounded-full bg-white">
            <Image 
              src="/aaa.png" 
              alt="Profile" 
              width={30} 
              height={30}
              className="object-cover"
            />
          </div>
          
          <IoMdFootball className="text-gray-800 w-6 h-6" />
          
          <SiNotion className="text-black w-6 h-6" />
          
          <FaRobot className="text-gray-700 w-6 h-6" />
        </OrbitingCircles>
        
        {/* Inner orbit */}
        <OrbitingCircles iconSize={30} radius={120} reverse speed={1.5} path={true}>
          <FaRegLightbulb className="text-amber-500 w-5 h-5" />
          
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-cyan-600" fill="currentColor">
            <path d="M12.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
          </svg>
          
          <svg width="20" height="20" viewBox="0 0 87.3 78" className="text-[#0066da]" fill="currentColor">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
          </svg>
        </OrbitingCircles>
        
        {/* Intro Card - Center positioned */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 max-w-xl mx-auto z-10 shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#384151]">
            KaiZephyr
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-[#384151] leading-relaxed max-w-lg">
            {content[language].intro}
          </p>
        </div>
      </div>
    </div>
  );
}