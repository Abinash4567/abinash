import Image from "next/image";
import dop from "../../public/dop.jpg";

export default function Home() {
  return (
    <div className="bg-re-500 mx-24">


    <div className="flex justify-between">

      <div className="bg-slate-00 flex flex-col z-10 mt-48">
        <pre className="text-green-500 font-bold mb-5 text-lg">Hi, my name is</pre>
        <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-200">Abinash.</div>
        <div className="text-7xl font-extrabold leading-none tracking-tight text-slate-400">Frontend Developer.</div>
        <div className="mt-7 text-slate-400 w-[calc((100svw-48px)/2)] pr-10 font-medium">I am currently <span className="text-green-500">pursuing degree</span> in CS major. I have keen interest in web technologies and <span className="text-green-500">JS framework</span> to create dynamic and interactive web experiences that can be accessed by a global audience.</div>
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

      <div className="flex justify-center items-center bg-red-600">
        <Image src={dop} alt="people" height={680}/>
      </div>

    </div>

    </div>
  );
}
