import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex justify-center items-center text-stone-800">
        <ul className="flex gap-7 my-5 text-lg font-[550] text-neutral-600">
            <li><Link className="hover:text-fuchsia-700 hover:text-shadow-lg" href="/home">Home</Link></li>
            <li><Link className="hover:text-fuchsia-700 hover:text-shadow-lg" href="blog">Blog</Link></li>
            <li><Link className="hover:text-fuchsia-700 hover:text-shadow-lg" href="blog">Resources</Link></li>
            <li><Link className="hover:text-fuchsia-700 hover:text-shadow-lg" href="about">About</Link></li>
            <li><Link className="hover:text-fuchsia-700 hover:text-shadow-lg" href="contact">Contact</Link></li>
        </ul>
    </div>
    <div className="h-0.5 bg-[#d9d9d9]"></div>
    </>
  )
}

export default Navbar