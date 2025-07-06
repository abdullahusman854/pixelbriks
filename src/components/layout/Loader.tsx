'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-dark-1000 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center animate-scale-in">
        {/* Logo container with bounce effect */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto relative flex items-center justify-center">
            <video
              src="/Pixelbrikslogo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-contain animate-bounce-slow drop-shadow-glow w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 