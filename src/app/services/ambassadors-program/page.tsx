'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AmbassadorsProgramPage() {
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
            <h1>Ambassadors Program</h1>
            <p>Building decentralized advocacy networks for long-term engagement</p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="presentation-container">
              <iframe 
                loading="lazy" 
                src="https://www.canva.com/design/DAGfu3n0U-Q/kPIdJmRyrYmy8ICDoVUgJg/view?embed" 
                allowFullScreen
                title="Web3 Ambassadors Program Presentation"
              />
            </div>
            
            <div className="attribution">
              <a 
                href="https://www.canva.com/design/DAGfu3n0U-Q/kPIdJmRyrYmy8ICDoVUgJg/view?utm_content=DAGfu3n0U-Q&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Web3 Ambassadors Program
              </a> by Waleed Zafar Yaseen
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 