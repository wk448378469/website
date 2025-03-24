"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: "我的项目",
      underDevelopment: "此页面正在开发中...",
      comingSoon: "更多项目案例即将展示",
      projects: [
        {
          title: "智能对话助手",
          description: "基于大语言模型开发的智能对话系统，能够理解自然语言，处理复杂查询，并提供准确的回答。已应用于多个行业的客户服务场景。",
          technologies: ["React", "Python", "OpenAI API", "TensorFlow"]
        },
        {
          title: "企业数据分析平台",
          description: "为企业提供一站式数据可视化和分析解决方案，支持多种数据源接入，实时数据处理和自定义报表生成。",
          technologies: ["Next.js", "D3.js", "Node.js", "MongoDB"]
        },
        {
          title: "移动健康应用",
          description: "面向个人用户的健康管理应用，集成了运动追踪、饮食记录、睡眠监测等功能，并提供个性化的健康建议。",
          technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow Lite"]
        }
      ]
    },
    en: {
      title: "My Projects",
      underDevelopment: "This page is under development...",
      comingSoon: "More project cases coming soon",
      projects: [
        {
          title: "Intelligent Dialogue Assistant",
          description: "An intelligent dialogue system based on large language models, capable of understanding natural language, processing complex queries, and providing accurate answers. Already applied in customer service scenarios across multiple industries.",
          technologies: ["React", "Python", "OpenAI API", "TensorFlow"]
        },
        {
          title: "Enterprise Data Analysis Platform",
          description: "Providing one-stop data visualization and analysis solutions for enterprises, supporting multiple data source access, real-time data processing, and custom report generation.",
          technologies: ["Next.js", "D3.js", "Node.js", "MongoDB"]
        },
        {
          title: "Mobile Health Application",
          description: "A health management application for individual users, integrating exercise tracking, diet recording, sleep monitoring and other functions, and providing personalized health advice.",
          technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow Lite"]
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
        
        <div className="space-y-8">
          {content[language].projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#384151] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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