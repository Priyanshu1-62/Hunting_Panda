"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  const [smoothY, setSmoothY]=useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const target = window.scrollY * 1.9;
      setSmoothY(prev => prev + (target - prev) * 0.1); // 0.1 = smoothing factor
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  
  return (
    <>
    <div className="relative h-[150vw] w-lvw">
      <Image src="/library1.jpg" fill alt="BG"/>
    </div>
    </>
  )
}

export default page

