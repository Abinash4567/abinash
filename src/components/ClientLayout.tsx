'use client';

import { useState, useEffect } from "react";
import GreetingTicker from "@/components/GreetingTicker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent hydration mismatch for fast refresh/reloads if needed, 
  // but initial true is fine for the desired effect.
  // We can also check session storage if we only want to show it once per session, 
  // but user said "initial homepage landing", implying every load for now.

  const handleComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Background />
      {isLoading ? (
        <GreetingTicker onComplete={handleComplete} />
      ) : (
        <>
          <Navbar />
          <div className="animate-in fade-in zoom-in duration-700">
            {children}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
