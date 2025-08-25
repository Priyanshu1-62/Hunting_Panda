import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-center mt-5">
        <ul className="flex gap-6 font-bold">
            <Link href="/home">Home</Link>
            <Link href="about">About</Link>
            <Link href="blog">Blog</Link>
            <Link href="contact">Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar