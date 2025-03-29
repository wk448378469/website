"use client";

import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';
import Footer from './components/Footer';

export default function Home() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      name: "个人简介",
      intro: [
        "王凯（网名：KaiZephyr）",
        "8年代码搬运工，AI模型调教师",
        "业余训狗爱好者",
        "脑内已完成100部电影但实际拍摄进度0%的准柏林金熊获得者",
        "专业团队陪跑师，多家创业公司从0到0的见证者",
        "擅长用奔跑弥补技术的业余足球躁动分子"
      ],
      contact: "联系方式",
      wechat: "微信：KaiZephyr",
      email: "电子邮箱：kaifeng920330@gmail.com"
    },
    en: {
      name: "About Me",
      intro: [
        "Wang Kai (aka KaiZephyr)",
        "8 years of code carrier, AI model trainer",
        "Amateur dog trainer",
        "Aspiring Berlin Film Festival Golden Bear Winner with 100 films completed in mind but 0% actual filming progress",
        "Professional Team Pacer, Witness of multiple startups' journey from 0 to 0",
        "Amateur football enthusiast who compensates lack of skill with running"
      ],
      contact: "Contact",
      wechat: "WeChat: KaiZephyr",
      email: "Email: kaifeng920330@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-4 py-12 md:py-20">
        {/* 调整最大宽度和内容间距 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-32">
          {/* 左侧头像 - 增大尺寸并调整位置 */}
          <div className="w-56 h-56 md:w-96 md:h-96 flex-shrink-0 relative mx-auto md:mx-0 md:sticky md:top-8 md:-ml-8">
            <Image
              src="/profile_avatar.jpg"
              alt="Profile Avatar"
              fill
              className="rounded-3xl object-cover shadow-lg"
              priority
            />
          </div>
          
          {/* 右侧文字区域 - 改善间距和排版 */}
          <div className="flex-1 space-y-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#384151] mb-8">
                {content[language].name}
              </h1>
              
              <ul className="space-y-4 text-lg text-gray-600">
                {content[language].intro.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-blue-500">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 联系方式区域 */}
            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-[#384151] mb-6">
                {content[language].contact}
              </h2>
              <div className="space-y-3 text-lg text-gray-600">
                <p>{content[language].wechat}</p>
                <p>{content[language].email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}