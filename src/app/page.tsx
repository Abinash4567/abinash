'use client';

import GreetingTicker from "@/components/greetingTicker";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Home() 
{
  const [greetStatus, setGreetStatus] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setGreetStatus(true);
    }, 5500)
  }, []);

  return (
    <>
      {!greetStatus && <GreetingTicker />}
      {greetStatus && 
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: [-100, 0], y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", ease: "easeOut" }} 
        className="px-4 sm:px-6 lg:px-24"
      >

        <nav className="flex justify-between border hover:border-green-400 rounded-3xl py-3 px-4 sm:px-9 sm:w-3/4 lg:w-3/4 font-bold transition ease-in-out duration-1000 sticky top-4 backdrop-blur-sm mx-auto z-20">
          <Link href="/"><div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Home</div></Link>

          <ScrollLink activeClass="active" to="timeline" spy={true} smooth={true} offset={0} duration={500}>
            <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">About me</div>
          </ScrollLink>

          <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
            <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Projects</div>
          </ScrollLink>

          <Link href="https://drive.google.com/file/d/1ZYR8MsSoadxL-d_PfcDPFdLJGZBISPYu/view?usp=drive_link">
            <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Resume</div>
          </Link>
        </nav>

        <div className="flex flex-col lg:flex-row gap-2 pt-5">
          <div className="mt-12 lg:mt-24 w-full lg:w-1/2">
            <pre className="text-green-500 font-bold mb-5 text-base sm:text-lg">Hi, my name is</pre>
            <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-slate-200">Abinash.</div>
            <div className="text-3xl sm:text-3xl lg:text-6xl font-extrabold leading-none tracking-tight text-slate-400">Full Stack Web Developer.</div>

            <div className="mt-7 text-slate-400 lg:w-[calc((100svw-48px)/2)] pr-0 lg:pr-20 font-medium sm:w-10/12">
              I&apos;m currently
              <span className="text-green-500">{' '}pursuing degree{' '}</span>in CS major. Currently focused in web technologies and <span className="text-green-500">JS frameworks</span> to create dynamic and interactive web apps.
            </div>

            <div className="mt-7 flex flex-wrap" id="timeline">
              <Link href="https://github.com/Abinash4567/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Github size={28} /></div></Link>
              <Link href="https://x.com/rayyadav_abi"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Twitter size={28} /></div></Link>
              <Link href="https://www.linkedin.com/in/abinash-ray-yadav/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Linkedin size={28} /></div></Link>
              <Link href="mailto:abinashyadav9845@gmail.com"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Mail size={28} /></div></Link>
            </div>
          </div>

          {/* You can add an image here for larger screens */}
          {/* <div className="hidden lg:block w-1/2">
            <Image src={dop} alt="people" width={400} className="mt-12" />
          </div> */}
        </div>

        <Timeline />
        <Skills />
        <Projects />
        
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 sm:w-[80vw]"></hr>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:w-[70vw]">
          <div className="mb-4 sm:mb-0">
            <div className="flex">
              <Link href="https://github.com/Abinash4567/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Github size={28} /></div></Link>
              <Link href="https://x.com/rayyadav_abi"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Twitter size={28} /></div></Link>
              <Link href="https://www.linkedin.com/in/abinash-ray-yadav/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Linkedin size={28} /></div></Link>
              <Link href="mailto:abinashyadav9845@gmail.com"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Mail size={28} /></div></Link>
            </div>
          </div>
          <div className="font-extrabold leading-none tracking-tight text-slate-200">Thank You</div>
        </div>
      </motion.div>}
    </>
  );
}