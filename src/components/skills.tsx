import React from 'react'
import typescript from "../../public/typescript.png";
import react from "../../public/react.png";
import nextjs from "../../public/nextjs.png";
import Image from 'next/image'

function Skills() {
    return (
        <div className='mt-32 bg-late-500 ml-72 border-2 border-red600'>
            <div className='flex gap-5'>
                <div className="text-3xl font-bold text-slate-300">Skills</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>

            <div className="">
                <button className="before:ease rounded-xl relative h-12 w-40 overflow-hidden border border-blue-700 bg-blue-600 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-600 hover:before:-translate-x-40">
                    <span className="relative z-10">
                        <span className='flex gap-3 ml-3 font-semibold'>
                            <Image src={typescript} alt='typescript' height={30}/>
                            <p className='mt-1'>Typescript</p>
                        </span>
                    </span>
                </button>

                <button className="before:ease rounded-xl relative h-12 w-40 overflow-hidden border border-slate-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-900 hover:before:-translate-x-40">
                    <span className="relative z-10">
                        <span className='flex gap-3 ml-3 font-semibold'>
                            <Image src={react} alt='react' height={30}/>
                            <p className='mt-1'>React</p>
                        </span>
                    </span>
                </button>

                <button className="before:ease rounded-xl relative h-12 w-40 overflow-hidden border border-slate-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-900 hover:before:-translate-x-40">
                    <span className="relative z-10">
                        <span className='flex gap-3 ml-3 font-semibold'>
                            <Image src={nextjs} alt='nextjs' height={30}/>
                            <p className='mt-1'>Nextjs</p>
                        </span>
                    </span>
                </button>


            </div>
        </div>
    )
}

export default Skills