import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  return (
    <>
    <div className="absolute top-0 z-[1] w-full py-4 px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative h-14 w-14">
          <Image src="/panda_pic0.png" fill alt="logo"/>
        </div>
        <p className="text-teal-600 text-xl font-bold">Hunting Panda</p>
      </div>
      <div className="hidden lg:flex justify-center items-center bg-transparent">
          <ul className="flex gap-11 font-[450] text-teal-50">
              <li>
                <Link className="" href="/home">Home</Link>
              </li>
              <li>
                <Link className="" href="/blog">Blog</Link>
              </li>
              <li className="relative flex flex-col items-center">
                <Link className="" href="/resources">Resources</Link>
                <div className="absolute top-11 flex flex-col px-3 py-2 bg-gray-900 text-white rounded-lg">
                  <p className="px-3 py-2 hover:bg-gray-800 rounded-lg">Snippets</p>
                  <p className="px-3 py-2 hover:bg-gray-800 rounded-lg">Notes</p>
                </div>
              </li>
              <li>
                <Link className="" href="/about">About</Link>
              </li>
              <li>
                <Link className="" href="/contact">Contact</Link>
              </li>
          </ul>
      </div>
      <div className="hidden lg:flex gap-2 text-teal-50">
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50 text-sm font-bold">Log In</button>
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50 bg-[#00E599] text-stone-800 text-sm font-bold">Sign up</button>
      </div>
      <button className="flex lg:hidden text-2xl text-teal-50"><TiThMenu /></button>
    </div>

    </>
  )
}

export default Navbar