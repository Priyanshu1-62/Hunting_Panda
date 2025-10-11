import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';

function Footer() {
  return (
    <div className="bg-teal-950 text-white">
      <div className="lg:flex justify-around lg:h-80">
        <div className="flex justify-center items-center">
            <div className="relative h-35 w-35">
              <Image src="/panda_pic4.png" fill alt="Logo"/>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl border-b-2 border-white">Hunting Panda</h2>
              <h2 className="text-xl">Hunt your doubts, catch clearity</h2>
            </div>
        </div>
        <div className="flex lg:hidden justify-around my-4">
          <div className="flex flex-col gap-1">
            <h4 className="font-bold mb-2">Learn</h4>
            <h4>Lessons</h4>
            <h4>Tips & Tricks</h4>
            <h4>Code Snippets</h4> 
            <h4>Notes</h4>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold mb-2">Legal</h4>
            <h4>Terms of Service</h4>
            <h4>Privacy Policy</h4>
            <h4>Disclaimer</h4>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-1 mt-20">
          <h4 className="font-bold mb-2">Learn</h4>
          <h4>Lessons</h4>
          <h4>Tips & Tricks</h4>
          <h4>Code Snippets</h4> 
          <h4>Notes</h4>
        </div>
        <div className="hidden lg:flex flex-col gap-1 mt-20">
          <h4 className="font-bold mb-2">Legal</h4>
          <h4>Terms of Service</h4>
          <h4>Privacy Policy</h4>
          <h4>Disclaimer</h4>
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
      <div className="flex justify-center items-center pt-2 pb-4 text-sm border-t-1 border-gray-600">
        <h4>{`Copyright @ ${new Date().getFullYear()} Hunting Panda. All rights reserved.`}</h4>
      </div>
    </div>
  )
}

export default Footer