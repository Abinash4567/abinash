import React from 'react'
import dop from "../../public/dop.jpg" 
import Image from 'next/image'

function Timeline() {
    return (
        <div className='flex'>
            <div className='mt-4 text-xl text-green-600 font-bold font-mono'>
                Hi, I&apos;m Abinash. I create amazing things that have IP address. I love to engage in amazing developers community to learn tech stuff. I have been coding and exploring tech stacks since 2021. I would love to collaborate and build amazing stuff.
            </div>

            <div>
                <Image src={dop} width={200} alt="image" />
            </div>
        </div>
    )
}

export default Timeline