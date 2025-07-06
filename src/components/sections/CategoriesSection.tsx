'use client';

import { useState, useEffect, useRef } from 'react';

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    {
      id: 'general',
      title: 'General',
      description: 'For projects trying to access a more generalised audience within Web3, we work with creators & KOLs that have those audiences. From new to more experienced web3 users.',
      features: ['Broad audience reach', 'Mixed experience levels', 'Cross-platform presence']
    },
    {
      id: 'defi',
      title: 'DeFi',
      description: 'We work with subniches of DeFi, from lending, NFT DeFi, staking, and much more!',
      features: ['Lending protocols', 'NFT DeFi', 'Staking solutions', 'Yield farming']
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'We work with web2 and web3 content creators and influencers within the space and across different platforms, including gaming native platforms.',
      features: ['Gaming influencers', 'Cross-platform reach', 'Native gaming platforms']
    },
    {
      id: 'trading',
      title: 'Trading',
      description: 'We work with KOLs that have strong concentrated audiences with people who like to trade crypto, from less to more experienced traders.',
      features: ['Crypto trading', 'Technical analysis', 'Risk management', 'Market insights']
    },
    {
      id: 'memes',
      title: 'Memes',
      description: 'Launching something for the culture? We\'ve got access to the most notorious meme KOLs!',
      features: ['Viral content', 'Cultural relevance', 'Community engagement']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section ref={sectionRef} id="categories" className="section relative">
      {/* Background pattern */}
      <div className="line-pattern"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/3 w-36 h-36 bg-gradient-primary rounded-full opacity-5 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-secondary rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Which Web3 Category Do You Need?
          </h2>
          <p className="text-xl text-gray-300">
            Categories
          </p>
        </div>

        {/* Categories List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`card cursor-pointer transition-all duration-300 ${
                activeCategory === category.id ? 'border-primary-500 shadow-glow' : ''
              } ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleCategoryClick(category.id)}
            >
              {/* Category Header */}
              <div className="p-6 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'bg-dark-700 group-hover:bg-primary-500/20'
                  }`}>
                    <span className="text-lg font-semibold">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className={`text-primary-500 transition-transform duration-300 ${
                  activeCategory === category.id ? 'rotate-90' : ''
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Category Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                activeCategory === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-dark-700">
                  <p className="text-gray-300 leading-relaxed mt-4 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 