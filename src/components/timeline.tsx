import React from 'react'
import dop from "../../public/dop.jpg"
import scc from "../../public/scc.png";
import Image from 'next/image'

function Timeline() {
    return (
        <div className="mt-32 borde border-green-500">
            <div className='flex gap-5'>
                <div className="text-3xl font-bold text-slate-300">About Me</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>
            
            <div className="flex gap-20">
                
                <div className="text-slate-400 basis-3/5 leading-relaxed bgslate-700 self-cente font-semibold borde-red-600">
                    <div className="mt-6">
                        Hi, I&apos;m Abinash. I create amazing things that posses IP
                        address. I love to engage in amazing developers community to learn
                        tech stuff. I have been coding and exploring tech stacks since 2021.
                        <div className="mt-4">
                            My coding journey started with learning to create a browser
                            extension{" "}
                            <a
                                href="https://github.com/Abinash4567/color-code"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:text-green-300 transition ease-in-out duration-300"
                            >
                                (color-code)
                            </a>
                            . Since then I&apos;m possionate to learn amazing libraries,
                            languages or framework. My day to day involves crafting new ideas
                            and working on it.
                        </div>
                    </div>

                    <div className="mt-4">
                        I would love to collaborate and build amazing stuff together.
                    </div>
                </div>

                <div>
                    <div className="group relative">
                        <Image
                            src={dop}
                            alt="Original Image"
                            height={300}
                        />
                        <Image
                            className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                            src={scc}
                            alt="Hover Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;