'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function KOLMarketingPage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const navbarElement = document.querySelector('.navbar') as HTMLElement;
            const navbarHeight = navbarElement?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="service-page">
        <div className="service-page-header">
          <div className="container">
            <h1>KOL Marketing</h1>
            <p className="text-gray-300 leading-relaxed">
              We strategically partner with top-tier influencers to amplify brand visibility and market trust. Let&apos;s discuss your KOL marketing strategy.
            </p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="presentation-container">
              <iframe 
                loading="lazy" 
                src="https://www.canva.com/design/DAGfdnsaCM8/sdpZydwC2F7kA0hJkqmAGw/view?embed" 
                allowFullScreen
                title="Web3 KOL Marketing Presentation"
              />
            </div>
            
            <div className="attribution">
              <a 
                href="https://www.canva.com/design/DAGfdnsaCM8/sdpZydwC2F7kA0hJkqmAGw/view?utm_content=DAGfdnsaCM8&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Web3 KOL Marketing
              </a> by Waleed Zafar Yaseen
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 