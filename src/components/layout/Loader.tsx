'use client';

import { useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    const progressInterval = setInterval(() => {
      // This interval is no longer used to update a progress bar,
      // but the logic for clearing it is kept as it was in the original file.
      // The 'progress' state variable was removed, so this interval is effectively dead code.
      // However, the instruction was to remove the unused 'progress' state variable,
      // not to remove the interval logic.
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