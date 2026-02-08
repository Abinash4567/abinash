'use client';

import { useEffect, useState } from 'react';

const greetings = [
    "Olá 🇧🇷",
    "مرحبا 🇦🇪",
    "Привет 🇷🇺",
    "안녕하세요 🇰🇷",
    "你好 🇨🇳",
    "こんにちは 🇯🇵",
    "Ciao 🇮🇹",
    "Bonjour 🇫🇷",
    "Hola 🇪🇸",
    "नमस्ते 🇳🇵",
];


interface GreetingTickerProps {
  onComplete: () => void;
}

const GreetingTicker = ({ onComplete }: GreetingTickerProps) => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [intervalTime, setIntervalTime] = useState(200);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (currentGreeting >= greetings.length - 1) {
             // Short delay before completing to let last greeting be seen
             timer = setTimeout(() => {
                 onComplete();
             }, 400);
             return () => clearTimeout(timer);
        }

        // Accelerate through the list
        timer = setTimeout(() => {
            setCurrentGreeting((prev) => prev + 1);
            setIntervalTime((prev) => Math.max(80, prev - 15));
        }, intervalTime);

        return () => clearTimeout(timer);
    }, [currentGreeting, intervalTime, onComplete]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <h1 
              key={currentGreeting} 
              className="text-2xl md:text-3xl font-medium text-white/90 animate-in fade-in duration-100"
            >
                {greetings[currentGreeting]}
            </h1>
        </div>
    );
};

export default GreetingTicker;
