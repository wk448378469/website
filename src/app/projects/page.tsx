"use client";

import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

export default function Projects() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      projects: [
        {
          title: "个人网站",
          description: "基于 Next.js 框架打造的个人网站，采用响应式设计实现多端适配，支持中英双语切换。",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          status: "完成"
        },
        {
          title: "足球场图鉴",
          description: "一个专注于发现和分享城市足球场地的小程序。不只是一个场地地图，更是一个连接球员与场地的桥梁。",
          technologies: ["微信小程序", "Python", "MongoDB"],
          status: "开发中"
        },
        {
          title: "同读计划",
          description: "一项让书籍跨越语言障碍的共读服务。每天定量更新译文，让等待变成期待，把阅读变成仪式。",
          technologies: ["AI辅助翻译", "互动讨论群"],
          status: "筹备中"
        }
      ]
    },
    en: {
      projects: [
        {
          title: "Personal Website",
          description: "A personal website built with Next.js, featuring responsive design, bilingual support.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          status: "Completed"
        },
        {
          title: "Football Field Guide",
          description: "A WeChat Mini Program focused on discovering and sharing urban football fields. More than just a venue map, it's a bridge connecting players with playing fields.",
          technologies: ["WeChat Mini Program", "Python", "MongoDB"],
          status: "In Development"
        },
        {
          title: "Read Together Project",
          description: "A co-reading service that breaks down language barriers in books. Daily translation updates turn waiting into anticipation and reading into a ritual.",
          technologies: ["AI-assisted Translation", "Interactive Discussion Group"],
          status: "In Planning"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {content[language].projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[#384151]">{project.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {project.status}
                    </span>
                  </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}