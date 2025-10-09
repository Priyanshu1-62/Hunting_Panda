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
    <div className="relative h-400 w-lvw">
      <Image src="/bulb_blackBG.jpg" fill alt="Bulb"/>
      <div 
        className={`absolute top-100 h-40 w-40 bg-amber-400 transition-transform duration-75 ease-in-out`}
        style={{ transform: `translateX(${smoothY*1.9}px)` }}
      >
      </div>
    </div>
    </>
  )
}

export default page

