'use client';

import Card from '@/components/card';
import { projects } from '@/lib/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
    const parentDiv = useRef(null);

    const { scrollYProgress } = useScroll({
        target: parentDiv,
        offset: ["start start", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 0.9], ["1%", "-238%"]);


    return (<div ref={parentDiv} className='pt-12 lg:h-[300vh] md:w-[90vw] sm:h-[240vh] sm:w-[80vw]' id='projects'>

        <div className='sticky top-24 overflow-hidden'>
            <div className="flex gap-5 mb-8">
                <div className="text-3xl font-bold text-slate-300">Projects</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>
            <motion.div style={{ x }} className='flex gap-4'>
                {projects.map((data) => {
                    return <Card key={data.name} props={data} />
                })}
            </motion.div>

        </div>
    </div>)
}