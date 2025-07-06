'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check for required env variables
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { email, message },
        publicKey
      );
      setEmail('');
      setMessage('');
      setSubmitStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Stats', href: '#stats' },
    { name: 'Careers', href: '#careers' },
    { name: 'Get in Touch', href: '#getintouch' },
  ];

  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/Logo.png"
                  alt="Pixelbriks Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pixelbriks
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Innovate. Integrate. Accelerate.
            </p>
            
            {/* Contact Email */}
            <div className="flex items-center gap-3 text-gray-300 group">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href="mailto:Info@pixelbriks.com" 
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Info@pixelbriks.com
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300"></span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-5">
            <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>

              {/* Email Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    {(!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY)
                      ? 'Email service is not configured. Please contact us directly.'
                      : 'Failed to send message. Please try again or contact us directly.'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Pixelbriks. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for innovation</span>
            </div>
            
            {/* Social Icons - Centered */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/pixelbriks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/pixelbriks?igsh=MXhxYmc2ajY3OG14Mg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}