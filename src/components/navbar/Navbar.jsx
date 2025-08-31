import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex justify-center items-center mt-5 text-stone-800">
        <ul className="flex gap-7 text-lg">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="about">About</Link></li>
            <li><Link href="blog">Blog</Link></li>
            <li><Link href="contact">Contact</Link></li>
        </ul>
        <Search className="ml-6 hover:cursor-pointer"/>
    </div>
    <div className="h-0.5 mt-3 mx-3 bg-stone-300"></div>
    </>
  )
}

export default Navbar