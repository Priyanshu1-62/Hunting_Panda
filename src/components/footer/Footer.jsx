import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';

function Footer() {
  return (
    <div className="flex justify-between h-80 px-24 bg-neutral-700 text-white">
        <div className="flex justify-center items-center">
            <div className="relative h-35 w-35">
              <Image src="/panda_pic1.png" fill/>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl border-b-2 border-white">Hunting Panda</h2>
              <h2 className="text-xl">Hunt your doubts, catch clearity</h2>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="">Follow us on social media</h2>
            <div className="flex gap-4 py-2 border-t-2 border-b-neutral-500">
              <Link href="">
                <SiGithub className="w-8 h-8"/>
              </Link>
              <Link href="">
                <SiLinkedin className="w-8 h-8"/>
              </Link>
              <Link href="">
                <SiInstagram className="w-8 h-8"/>
              </Link>
              <Link href="">
                <SiFacebook className="w-8 h-8"/>
              </Link>
              <Link href="">
                <SiYoutube className="w-8 h-8"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer