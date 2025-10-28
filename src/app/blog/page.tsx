"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function page() {
  const [initialGrow, setInitialGrow]=useState<Boolean>(true);
  return (
    <div className="py-32 px-32 bg-zinc-900">
      <div className="flex h-80 border-4 border-cyan-50 rounded-2xl">
        <div className={`w-[15vw] ${initialGrow?"grow":""} hover:grow bg-amber-600 transition-all duration-600 ease-in-out`}></div>
        <div className={`w-[15vw] hover:grow bg-blue-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow(false)}} onMouseLeave={()=>{setInitialGrow(true)}}></div>
        <div className={`w-[15vw] hover:grow bg-cyan-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow(false)}} onMouseLeave={()=>{setInitialGrow(true)}}></div>
        <div className={`w-[15vw] hover:grow bg-emerald-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow(false)}} onMouseLeave={()=>{setInitialGrow(true)}}></div>
      </div>
    </div>
  )
}

export default page