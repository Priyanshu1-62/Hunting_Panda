"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

