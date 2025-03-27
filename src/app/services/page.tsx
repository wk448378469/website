"use client";

import { useLanguage } from '../context/LanguageContext';
import { BsChatDots } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import Footer from '../components/Footer';

export default function Services() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: "把时间卖给值得的人",
      comingSoon: "更多服务即将推出",
      services: [
        {
          icon: <BsChatDots className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "在线陪聊",
          price: "200元/小时起",
          features: [
            "从'今天吃什么'到'要不要辞职'，都能聊",
            "职场迷茫？分手纠结？人生选择？也都能唠",
            "不是算命，但保证给你靠谱建议",
            "不是心理咨询，但承诺认真倾听"
          ]
        },
        {
          icon: <FaMapMarkedAlt className="text-2xl text-green-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "旅行管家",
          price: "根据目的地和天数报价",
          features: [
            "旅行方案制定，提出你的需求，我来规划所有的内容",
            "全程陪同套餐包含：吃喝玩乐行住的全预订、代驾服务、航拍",
            "不要指望我能拍出大片，但保证记录下快乐瞬间"
          ]
        },
        {
          icon: <HiCode className="text-2xl text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "技术服务",
          price: "视需求复杂度面议",
          features: [
            "主要擅长AI相关的开发工作",
            "小程序、网站、桌面应用：价格合适也都能干",
            "全栈服务：需求分析➡️产品设计➡️技术开发➡️上线部署"
          ]
        }
      ]
    },
    en: {
      title: "Selling Time to Those Who Matter",
      comingSoon: "More services coming soon",
      services: [
        {
          icon: <BsChatDots className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "Online Companionship Chat",
          price: "Starting from $30/hour",
          features: [
            "From 'what to eat today' to 'should I quit my job', we can discuss it all",
            "Career confusion? Relationship dilemmas? Life choices? We can talk about it all",
            "Not fortune telling, but I guarantee reliable advice",
            "Not psychological counseling, but I promise to listen attentively"
          ]
        },
        {
          icon: <FaMapMarkedAlt className="text-2xl text-green-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "Travel Butler",
          price: "Quote based on destination and duration",
          features: [
            "Travel planning - tell me your needs, I'll plan everything",
            "Full package includes: All bookings for food, accommodation, transportation, activities, driving service and aerial photography",
            "Don't expect professional photography, but I guarantee to capture happy moments"
          ]
        },
        {
          icon: <HiCode className="text-2xl text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
          title: "Technical Services",
          price: "Based on project complexity",
          features: [
            "Specialized in AI-related development work",
            "Mini programs, websites, desktop applications: Can handle them all at reasonable prices",
            "Full-stack service: Requirement analysis ➡️ Product design ➡️ Development ➡️ Deployment"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-2xl font-bold text-[#384151] mb-16 text-center">
            {content[language].title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].services.map((service, index) => (
              <div key={index} className="group border border-gray-200 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="text-center mb-6 relative">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {service.icon}
                    <h3 className="text-lg md:text-xl font-bold text-[#384151]">{service.title}</h3>
                  </div>
                  <div className="mt-2 inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {service.price}
                  </div>
                </div>
                
                <ul className="text-gray-600 space-y-2.5 mt-auto text-sm md:text-base">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 text-xs md:text-sm">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}