'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CommunityBuildingPage() {
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
            <h1>Community Building</h1>
            <p>Creating thriving ecosystems with sustainable governance models</p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="service-content-grid">
              <div className="service-content-section">
                <h2>Building Sustainable Communities</h2>
                <p>
                  We create thriving ecosystems with governance models and incentive structures that ensure sustainability. 
                  Our approach focuses on building engaged, active communities that drive long-term project success.
                </p>
                
                <div className="service-features">
                  <div className="feature-item">
                    <h3>Governance Models</h3>
                    <p>Designing effective governance structures that empower community participation.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Incentive Structures</h3>
                    <p>Creating reward systems that motivate community engagement and contribution.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Community Engagement</h3>
                    <p>Fostering active participation and meaningful interactions within your community.</p>
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