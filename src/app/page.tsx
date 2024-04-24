import Image from "next/image";
import dop from "../../public/dop.jpg";
import Timeline from "@/components/timeline";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="bg-gren-300 mx-24 h-[200vh]">
      <div className="mt-8 z-10 flex justify-between border hover:border-green-400 rounded-3xl py-3  px-9 w-2/4  font-bold transition ease-in-out duration-1000 sticky top-2 backdrop-blur-sm ml-64">

        <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Home</div>
        <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Timeline</div>
        <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Projects</div>
        <div className="hover:text-green-400 cursor-pointer transition ease-in-out duration-500">Resume</div>
      </div>

    <div className="flex gap-2 pt-5 border-gray-50 border-">

      <div className="bg-slte-300 mt-24"> 
        <pre className="text-green-500 font-bold mb-5 text-lg">Hi, my name is</pre>
        <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-200">Abinash.</div>
        <div className="text-6xl font-extrabold leading-none tracking-tight text-slate-400">Full Stack Web Developer.</div>

        {/* <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-400">Backend Developer.</div>
        <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-400">Full Stack Developer.</div> */}
        <div className="mt-7 text-slate-400 w-[calc((100svw-48px)/2)] pr-10 font-medium">I&apos;m currently <span className="text-green-500 w-">pursuing degree</span> in CS major. I have keen interest in web technologies and <span className="text-green-500">JS frameworks</span> to create dynamic and interactive web experiences that can be accessed by a global audience.</div>

        <div className="mt-7 flex">
          <div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Github size={28} /></div>
          <div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Twitter size={28} /></div>
          <div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Linkedin size={28} /></div>
          <div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e]"><Mail size={28} /></div>
        </div>



        </div>


      {/* <div className="bg-slate-00 basis-1/2 flex flex-col justify-center pt-18">
        <div className="text-6xl font-bold">
          <div>Hi, I&apos;m <span className="text-green-500">Abinash</span></div>
          <div className="text-green-500 ">FrontEnd Developer</div>
        </div>

        <div className="font-semibold leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum odio
          reprehenderit dolorem nemo beatae quisquam, enim, quas quia quos
          voluptatibus quaerat. Nisi, quia? Quia
        </div>
      </div> */}

        <Image src={dop} alt="people" width={400}/>

    </div>

    <Timeline />
    <Skills />

    </div>
  );
}
