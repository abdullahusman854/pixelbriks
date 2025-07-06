'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MVPBetaTestingPage() {
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
            <h1>MVP & Beta Testing</h1>
            <p>Ensuring your game&apos;s functionality and user experience excellence</p>
          </div>
        </div>
        
        <div className="service-page-content">
          <div className="container">
            <div className="service-content-grid">
              <div className="service-content-section">
                <h2>Comprehensive Testing Solutions</h2>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re offering MVP and Beta testing services to ensure your game&apos;s functionality and user experience.
                </p>
                
                <div className="service-features">
                  <div className="feature-item">
                    <h3>MVP Development</h3>
                    <p>Building minimum viable products that validate your core concepts and user needs.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Beta Testing</h3>
                    <p>Comprehensive testing with real users to identify issues and gather feedback.</p>
                  </div>
                  <div className="feature-item">
                    <h3>Quality Assurance</h3>
                    <p>Rigorous testing protocols to ensure your product meets quality standards.</p>
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