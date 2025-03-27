"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Favorites() {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      categories: [
        {
          title: "喜欢的球队",
          items: [
            {
              name: "皇家马德里",
              logo: "https://duihui.duoduocdn.com/zuqiu/zq_huangjiamadeli_641365.png"
            },
            {
              name: "洛杉矶湖人",
              logo: "https://duihui.duoduocdn.com/nba/lq_luoshanjihuren_085572.png"
            }
          ]
        },
        {
          title: "喜欢的电影",
          items: [
            {
              name: "触不可及",
              cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.webp",
              link: "https://movie.douban.com/subject/6786002/"
            },
            {
              name: "星际穿越",
              cover: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
              link: "https://movie.douban.com/subject/1889243/"
            },
            {
              name: "黑客帝国",
              cover: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp",
              link: "https://movie.douban.com/subject/1291843/"
            },
            {
              name: "超脱",
              cover: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.webp",
              link: "https://movie.douban.com/subject/5322596/"
            }
          ]
        },
        {
          title: "喜欢的专辑",
          items: [
            {
              name: "七里香",
              cover: "https://img9.doubanio.com/view/subject/m/public/s3737076.jpg",
              link: "https://music.douban.com/subject/1401853/",
              artist: "周杰伦"
            },
            {
              name: "闪耀 Stellar Moments",
              cover: "https://img3.doubanio.com/view/subject/m/public/s35000772.jpg",
              link: "https://music.douban.com/subject/37107643/",
              artist: "谢帝"
            },
            {
              name: "黄沙",
              cover: "https://img9.doubanio.com/view/subject/m/public/s34868276.jpg",
              link: "https://music.douban.com/subject/36901177/",
              artist: "王恩喆Echo"
            },
            {
              name: "别怕变老",
              cover: "https://img3.doubanio.com/view/subject/m/public/s34013687.jpg",
              link: "https://music.douban.com/subject/35621138/",
              artist: "艾热 / 王以太"
            }
          ]
        }
      ]
    },
    en: {
      categories: [
        {
          title: "Favorite Teams",
          items: [
            {
              name: "Real Madrid",
              logo: "https://duihui.duoduocdn.com/zuqiu/zq_huangjiamadeli_641365.png"
            },
            {
              name: "LA Lakers",
              logo: "https://duihui.duoduocdn.com/nba/lq_luoshanjihuren_085572.png"
            }
          ]
        },
        {
          title: "Favorite Movies",
          items: [
            {
              name: "The Intouchables",
              cover: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.webp",
              link: "https://movie.douban.com/subject/6786002/"
            },
            {
              name: "Interstellar",
              cover: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
              link: "https://movie.douban.com/subject/1889243/"
            },
            {
              name: "The Matrix",
              cover: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp",
              link: "https://movie.douban.com/subject/1291843/"
            },
            {
              name: "Detachment",
              cover: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.webp",
              link: "https://movie.douban.com/subject/5322596/"
            }
          ]
        },
        {
          title: "Favorite Albums",
          items: [
            {
              name: "Common Jasmine Orange",
              cover: "https://img9.doubanio.com/view/subject/m/public/s3737076.jpg",
              link: "https://music.douban.com/subject/1401853/",
              artist: "Jay Chou"
            },
            {
              name: "Stellar Moments",
              cover: "https://img3.doubanio.com/view/subject/m/public/s35000772.jpg",
              link: "https://music.douban.com/subject/37107643/",
              artist: "Boss Shady"
            },
            {
              name: "Yellow Sand",
              cover: "https://img9.doubanio.com/view/subject/m/public/s34868276.jpg",
              link: "https://music.douban.com/subject/36901177/",
              artist: "Wang Enzhe Echo"
            },
            {
              name: "Don't Be Afraid of Getting Old",
              cover: "https://img3.doubanio.com/view/subject/m/public/s34013687.jpg",
              link: "https://music.douban.com/subject/35621138/",
              artist: "AIR / Wang Yitai"
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {content[language].categories.map((category, index) => (
            <section key={index} className="space-y-6">
              <h2 className="text-2xl font-bold text-[#384151]">{category.title}</h2>
              
              <div className={`grid gap-6 ${
                category.title.includes("球队") || category.title.includes("Teams") 
                  ? "grid-cols-2 md:grid-cols-2" 
                  : "grid-cols-2 md:grid-cols-4"
              }`}>
                {category.items.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                      category.title.includes("球队") || category.title.includes("Teams")
                        ? "w-32 h-32 mx-auto"
                        : "aspect-square"
                    }`}>
                      {/* 根据类别使用不同的图片组件 */}
                      {category.title.includes("球队") || category.title.includes("Teams") ? (
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 128px"
                        />
                      ) : (
                        <img
                          src={`/api/image-proxy?url=${encodeURIComponent(item.cover)}`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <h3 className="font-medium text-[#384151] group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      {item.artist && (
                        <p className="text-sm text-gray-500">{item.artist}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}