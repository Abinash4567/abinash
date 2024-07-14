import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function getCurrentFrame(index: number): string {
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;
}

interface ImageCanvasProps {
    scrollHeight: number;
    numFrames: number;
    width: number;
    height: number;
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ scrollHeight, numFrames, width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [frameIndex, setFrameIndex] = useState<number>(0);

    const preloadImages = useCallback(() => {
        const newImages: HTMLImageElement[] = [];
        for (let i = 1; i <= numFrames; i++) {
            const img = new Image();
            const imgSrc = getCurrentFrame(i);
            img.src = imgSrc;
            newImages.push(img);
        }
        setImages(newImages);
    }, [numFrames]);

    const handleScroll = useCallback(() => {
        const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
        const index = Math.min(
            numFrames - 1,
            Math.ceil(scrollFraction * numFrames)
        );

        if (index <= 0 || index > numFrames) {
            return;
        }

        setFrameIndex(index);
    }, [scrollHeight, numFrames]);

    const renderCanvas = useCallback(() => {
        const context = canvasRef.current?.getContext("2d");
        if (context) {
            context.canvas.width = width;
            context.canvas.height = height;
        }
    }, [width, height]);

    useEffect(() => {
        preloadImages();
        renderCanvas();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [preloadImages, renderCanvas, handleScroll]);

    useEffect(() => {
        if (!canvasRef.current || images.length < 1) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        if (!context) return;

        let requestId: number;

        const render = () => {
            context.drawImage(images[frameIndex], 0, 0);
            requestId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);

    return (
        <div style={{ height: scrollHeight }}>
            <div className="sticky top-[calc(20vh)] grid grid-flow-col justify-stretch">

                <div className="px-5 md:px-15 ">
                    <h1 className="text-[#f5f5fd] text-4xl">billops</h1>
                    <div className='text-sm text-green-500 font-bold mb-4'>Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql</div>

                    <div className='text-gray-500 font-semibold'>billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.</div>

                </div>

        
                <canvas
                    ref={canvasRef}
                    className="object-contain w-[600px] justify-self-end"
                />
            </div>
        </div>
    );
};


const Home: React.FC = () => {
    const imageCanvasProps = useMemo(() => ({
        scrollHeight: 4000,
        width: 1158,
        height: 770,
        numFrames: 147
    }), []);

    return (
        <main className="mt-12">

            <div className="flex gap-5 mb-8">
                <div className="text-3xl font-bold text-slate-300">Projects</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>
            
            <ImageCanvas {...imageCanvasProps} />
            
        </main>
    );
};

export default Home;