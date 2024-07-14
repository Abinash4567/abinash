'use client';

import GreetingTicker from "@/components/greetingTicker";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink, LinkProps as ScrollLinkProps } from "react-scroll";

export default function Home() {
  const [greetStatus, setGreetStatus] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setGreetStatus(true);
    }, 5500)
  }, []);
  return (
    <>
      {!greetStatus && <GreetingTicker />}
      {greetStatus && <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: [-100, 0], y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", ease: "easeOut" }} className="mx-24">


        <div id="home" className="flex justify-between border hover:border-green-400 rounded-3xl py-3 px-9 w-2/4 font-bold transition ease-in-out duration-1000 sticky top-4 backdrop-blur-sm ml-64 z-20">

        <Link href="/"><div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Home</div>
        </Link>

        <ScrollLink activeClass="active" to="timeline" spy={true} smooth={true} offset={0} duration={500}>
          <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">About me</div>
        </ScrollLink>

          <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
          <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Projects</div></ScrollLink>

          <Link href="https://drive.google.com/file/d/1ZYR8MsSoadxL-d_PfcDPFdLJGZBISPYu/view?usp=drive_link"><div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Resume</div></Link>

        </div>


        <div className="flex gap-2 pt-5 border-red-400 borde-2">

          <div className="bg-slte-300 mt-24">
            <pre className="text-green-500 font-bold mb-5 text-lg">Hi, my name is</pre>
            <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-200">Abinash.</div>
            <div className="text-6xl font-extrabold leading-none tracking-tight text-slate-400">Full Stack Web Developer.</div>

            <div className="mt-7 text-slate-400 w-[calc((100svw-48px)/2)] pr-20 font-medium">
              I&apos;m currently
              <span className="text-green-500">{' '}pursuing degree{' '}</span>in CS major. Currently focused in web technologies and <span className="text-green-500">JS frameworks</span> to create dynamic and interactive web apps.
            </div>

            <div className="mt-7 flex" id="timeline">
              <Link href="https://github.com/Abinash4567/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Github size={28} /></div></Link>

              <Link href="https://x.com/rayyadav_abi"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Twitter size={28} /></div></Link>

              <Link href="https://www.linkedin.com/in/abinash-ray-yadav/"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Linkedin size={28} /></div></Link>

              <Link href="mailto:abinashyadav9845@gmail.com"><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Mail size={28} /></div></Link>
            </div>



          </div>

          {/* <Image src={dop} alt="people" width={400} className="mt-12" /> */}
        </div>



        <Timeline />
        <Skills />
        <Projects />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-between mb-12">
          <div>
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
