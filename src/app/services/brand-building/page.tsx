'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BrandBuildingPage() {
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
            <h1>Brand Building</h1>
            <p>Crafting powerful narratives and tokenomics strategies for market authority</p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="service-content-grid">
              <div className="service-content-section">
                <h2>Our Brand Building Approach</h2>
                <p>
                  We specialize in creating compelling brand narratives that resonate with the Web3 community. 
                  Our comprehensive approach includes strategic positioning, tokenomics design, and market authority establishment.
                </p>
                
                <div className="service-features">
                  <div className="feature-item">
                    <h3>Strategic Positioning</h3>
                    <p>We help you carve out a unique position in the competitive Web3 landscape.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Tokenomics Design</h3>
                    <p>Comprehensive token economics that align incentives and drive long-term value.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Market Authority</h3>
                    <p>Establishing your project as a thought leader in your niche.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 