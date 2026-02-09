'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by defining a placeholder or conditional rendering if needed, 
  // but initial state '' is fine as it will client-side render quickly.
  // Ideally we want to avoid layout shift, so maybe perform a quick hydration check or just render.

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 text-sm font-medium tracking-wide mix-blend-difference text-white pointer-events-none">
      <div className="pointer-events-auto">
        UTC +05:45
      </div>
      <div className="pointer-events-auto tabular-nums">
        {time}
      </div>
    </nav>
  );
}
