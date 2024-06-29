'use client';
import { useEffect, useState } from 'react';

const greetings = [
    "Hello 👋", "नमस्कार 🇳🇵", "नमस्ते 🇮🇳", "Hola 🇪🇸", "Bonjour 🇫🇷", "Hallo 🇩🇪", "Ciao 🇮🇹", "Olá 🇧🇷", "Привет 🇷🇺",
    "こんにちは 🇯🇵", "你好 🇨🇳", "안녕하세요 🇰🇷", "Hej 🇸🇪", "Hei 🇫🇮", "Salam 🇮🇷", "Γειά σας 🇬🇷",
    "Ahoj 🇨🇿", "Merhaba 🇹🇷", "שלום 🇮🇱",  "สวัสดี 🇹🇭", "Kamusta 🇵🇭", "Halo 🇮🇩",
    "Selam 🇪🇹", "Sawubona 🇿🇦", "Yā, sannu 🇳🇬", "Halló 🇮🇸", "Tere 🇪🇪", "Dia dhuit 🇮🇪",
    "Sveiki 🇱🇻", "Salve 🇮🇹", "Hallo 🇳🇱", "Cześć 🇵🇱", "Здраво 🇷🇸", "Xin chào 🇻🇳", "سلام 🇮🇷", "مرحبا 🇦🇪", 
];

const GreetingTicker = () => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [intervalTime, setIntervalTime] = useState(500);

    useEffect(() => {
        let timer;

        const adjustIntervalTime = () => {
            const halfwayPoint = Math.floor(greetings.length / 7);
            if (currentGreeting < halfwayPoint) {
                // AccelerateNumberTicker
                setIntervalTime((prev) => Math.max(120, prev - 100));
            } else {
                // Decelerate
                setIntervalTime((prev) => Math.min(120, prev + 120));
            }
        };

        timer = setTimeout(() => {
            setCurrentGreeting((prev) => (prev + 1));
            adjustIntervalTime();
        }, intervalTime);

        return () => clearTimeout(timer);
    }, [currentGreeting, intervalTime]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">{greetings[currentGreeting]}</h1>
        </div>
    );
};

export default GreetingTicker;
