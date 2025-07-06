'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function SocialMediaManagementPage() {
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
            <h1>Social Media Management</h1>
            <p>Data-driven multi-platform strategies to maximize community interaction</p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="service-content-grid">
              <div className="service-content-section">
                <h2>Comprehensive Social Media Strategy</h2>
                <p>
                  We execute data-driven, multi-platform strategies to maximize community interaction and project reach. 
                  Our team manages all aspects of your social media presence across major platforms.
                </p>
                
                <div className="service-features">
                  <div className="feature-item">
                    <h3>Content Strategy</h3>
                    <p>Engaging content that resonates with your target audience and drives engagement.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Community Management</h3>
                    <p>Active community engagement and moderation across all platforms.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Analytics & Optimization</h3>
                    <p>Data-driven insights to continuously improve your social media performance.</p>
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