"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Favorites() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: "我的喜好",
      underDevelopment: "此页面正在开发中...",
      comingSoon: "更多内容即将更新",
      favorites: [
        {
          category: "足球",
          items: [
            "每周末参加业余足球比赛",
            "喜欢看英超、西甲和欧冠比赛",
            "收藏各种经典足球比赛视频"
          ]
        },
        {
          category: "电影",
          items: [
            "热爱独立电影和艺术电影",
            "喜欢研究电影叙事和摄影技巧",
            "梦想有一天能拍摄自己的电影作品"
          ]
        },
        {
          category: "训狗",
          items: [
            "研究各种正向训练方法",
            "参加犬类行为学相关课程",
            "与爱犬一起参加各种活动"
          ]
        },
        {
          category: "阅读",
          items: [
            "科幻小说（刘慈欣、特德·姜）",
            "技术书籍和前沿科技文章",
            "历史和哲学著作"
          ]
        }
      ]
    },
    en: {
      title: "My Favorites",
      underDevelopment: "This page is under development...",
      comingSoon: "More content coming soon",
      favorites: [
        {
          category: "Football",
          items: [
            "Participate in amateur football matches every weekend",
            "Enjoy watching Premier League, La Liga, and Champions League",
            "Collect videos of various classic football matches"
          ]
        },
        {
          category: "Movies",
          items: [
            "Love independent and art films",
            "Interested in studying film narrative and cinematography",
            "Dream of shooting my own films someday"
          ]
        },
        {
          category: "Dog Training",
          items: [
            "Research various positive training methods",
            "Take courses related to canine behavior",
            "Participate in various activities with my dog"
          ]
        },
        {
          category: "Reading",
          items: [
            "Science fiction (Liu Cixin, Ted Chiang)",
            "Technical books and cutting-edge technology articles",
            "Historical and philosophical works"
          ]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content[language].favorites.map((favorite, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#384151] mb-4">{favorite.category}</h3>
              <ul className="space-y-2">
                {favorite.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
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