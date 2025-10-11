"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// export const metadata = {
//   title: "Home",
//   description: "Home page"
// }

function page() {
  return (
    <>
    <div className="relative h-[150vw] w-full">
      <Image src="/library1.jpg" fill alt="BG"/>
    </div>
    </>
  )
}

export default page

