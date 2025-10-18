"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className="relative h-[150vw] w-full">
      <Image src="/library1.jpg" fill alt="BG"/>
      <div className="absolute top-44 w-full px-6">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-3 text-5xl font-bold text-amber-50">
            <p>Hunt your doubts,</p>
            <p>Catch Clearity</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page

