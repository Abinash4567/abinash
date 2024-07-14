import Image from 'next/image';
import { data } from '@/app/types';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Card({props}: {props: data}) {
    return (
    <div className='flex'>
        <div className='w-[50vw] sm:w-[80vw] lg:w-[50vw]'>
            <div className="text-[#f5f5fd] text-4xl mt-12 flex">
                {props.name}
                <div className='flex justify-center ml-8'>
                <Link href={props.url}><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e] w-fit"><Github size={24} /></div></Link>

                <Link href={props.url}><div className="hover:bg-slate-800 transition ease-in-out p-3 rounded-xl cursor-pointer text-[#22c55e] w-fit"><Globe size={24} /></div></Link>
            </div>
            </div>
            <div className="text-sm text-green-500 font-bold mb-4">{props.techStack}</div>
            <div className='text-gray-400 font-semibold'>{props.description}</div>
        </div>

        <div className='lg:w-[40vw] overflow-hidden h-[50vh] mt-12 lg:flex items-center hidden'>
            <Image src={props.image} width={500} height={900} alt='Image'  className='transition-transform duration-300 ease-in-out hover:scale-110'/>
            {/* <InteractiveImage imageSrc={props.image}/> */}
        </div>
    </div>)
}