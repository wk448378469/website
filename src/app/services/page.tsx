"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: "我的服务",
      underDevelopment: "此页面正在开发中...",
      comingSoon: "更多服务即将推出",
      services: [
        {
          title: "AI模型调教",
          description: "基于最新的大语言模型技术，提供定制化的AI训练和优化服务，帮助您的业务实现智能化转型。"
        },
        {
          title: "全栈开发",
          description: "从前端到后端的完整解决方案，使用React、Next.js、Node.js等技术栈，打造现代化、高性能的Web应用。"
        },
        {
          title: "数据分析",
          description: "利用先进的数据分析工具和技术，从您的业务数据中挖掘有价值的洞察，支持决策制定。"
        }
      ]
    },
    en: {
      title: "My Services",
      underDevelopment: "This page is under development...",
      comingSoon: "More services coming soon",
      services: [
        {
          title: "AI Model Training",
          description: "Provide customized AI training and optimization services based on the latest large language model technologies to help your business achieve intelligent transformation."
        },
        {
          title: "Full-Stack Development",
          description: "Complete solutions from frontend to backend using React, Next.js, Node.js and other tech stacks to create modern, high-performance web applications."
        },
        {
          title: "Data Analysis",
          description: "Using advanced data analysis tools and techniques to mine valuable insights from your business data to support decision making."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#384151] mb-8">
          {content[language].title}
        </h1>
        
        <div className="bg-yellow-100 p-4 rounded-lg mb-8 text-center">
          <p className="text-yellow-800 font-medium">
            {content[language].underDevelopment}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#384151] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500 italic">
          {content[language].comingSoon}
        </div>
      </div>
    </div>
  );
}