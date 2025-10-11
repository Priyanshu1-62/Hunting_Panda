import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className="absolute top-0 z-[1] w-full py-4 px-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative h-14 w-14">
          <Image src="/panda_pic0.png" fill alt="logo"/>
        </div>
        <p className="text-teal-600 text-xl font-bold">Hunting Panda</p>
      </div>
      <div className="flex justify-center items-center bg-transparent">
          <ul className="flex gap-11 font-[450] text-teal-50">
              <li><Link className="hover:text-emerald-50 hover:text-shadow-lg" href="/home">Home</Link></li>
              <li><Link className="hover:text-emerald-50 hover:text-shadow-lg" href="blog">Blog</Link></li>
              <li><Link className="hover:text-emerald-50 hover:text-shadow-lg" href="resources">Resources</Link></li>
              <li><Link className="hover:text-emerald-50 hover:text-shadow-lg" href="about">About</Link></li>
              <li><Link className="hover:text-emerald-50 hover:text-shadow-lg" href="contact">Contact</Link></li>
          </ul>
      </div>
      <div className="flex gap-2 text-teal-50">
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50 text-sm font-bold">Log In</button>
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50 bg-[#00E599] text-stone-800 text-sm font-bold">Sign up</button>
      </div>
    </div>

    </>
  )
}

export default Navbar