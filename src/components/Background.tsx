'use client';

import { useEffect, useState } from 'react';

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-neutral-950">
        {/* Colorful Nebula Patches */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-3xl opacity-30" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-purple-900/20 blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-3xl opacity-30" />
        <div className="absolute bottom-[20%] right-[20%] w-[25%] h-[25%] rounded-full bg-fuchsia-900/10 blur-3xl opacity-20" />
        
        {/* Subtle Overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 opacity-80" />
        
        {/* Stars Layer 1 - Smallest */}
        <div className="stars-1 absolute inset-0 opacity-40 animate-pulse-slow" />
        
        {/* Stars Layer 2 - Medium */}
        <div className="stars-2 absolute inset-0 opacity-30 animate-pulse-slower" />
      </div>
      
      <style jsx>{`
        .stars-1 {
          background-image: 
            radial-gradient(1px 1px at 10% 10%, #fff 100%, transparent),
            radial-gradient(1px 1px at 20% 20%, #fff 100%, transparent),
            radial-gradient(1px 1px at 30% 90%, #fff 100%, transparent),
            radial-gradient(1px 1px at 40% 40%, #fff 100%, transparent),
            radial-gradient(1px 1px at 50% 10%, #fff 100%, transparent),
            radial-gradient(1px 1px at 60% 80%, #fff 100%, transparent),
            radial-gradient(1px 1px at 70% 30%, #fff 100%, transparent),
            radial-gradient(1px 1px at 80% 60%, #fff 100%, transparent),
            radial-gradient(1px 1px at 90% 10%, #fff 100%, transparent),
            radial-gradient(1px 1px at 15% 75%, #fff 100%, transparent);
          background-size: 50% 50%;
        }
        .stars-2 {
          background-image: 
            radial-gradient(1.5px 1.5px at 15% 15%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 25% 85%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 35% 35%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 45% 65%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 55% 25%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 65% 55%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 75% 15%, #fff 100%, transparent),
            radial-gradient(1.5px 1.5px at 85% 75%, #fff 100%, transparent);
          background-size: 60% 60%;
        }
      `}</style>
    </div>
  );
}
