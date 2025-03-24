"use client";

import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';

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
    <div className="min-h-screen bg-white px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* 左侧头像 - 更大的正方形带圆角 */}
        <div className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0 relative">
          <Image
            src="/aaa.png"
            alt="Profile Avatar"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
        
        {/* 右侧文字区域 */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#384151] mb-4">
            {content[language].name}
          </h1>
          
          <ul className="mb-8 space-y-2 text-[#384151]">
            {content[language].intro.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          {/* 联系方式 - 标题与个人简介同样大小 */}
          <div className="text-[#384151]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#384151] mb-4">
              {content[language].contact}
            </h2>
            <p className="mb-2">{content[language].wechat}</p>
            <p>{content[language].email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}