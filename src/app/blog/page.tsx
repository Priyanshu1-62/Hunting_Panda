"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

function page() {
  const [initialGrow1, setInitialGrow1]=useState<Boolean>(true);
  const [initialGrow2, setInitialGrow2]=useState<Boolean>(true);
  return (
    <div className="py-32 px-32 bg-zinc-900">
      <div className="flex h-80 border-4 border-cyan-50 rounded-2xl">
        <div className={`relative w-[15vw] ${initialGrow1?"grow brightness-100":""} hover:grow brightness-25 hover:brightness-100 bg-amber-600 transition-all duration-600 ease-in-out`}>
          <Image fill src="/docker_pic1.png" alt="Docker_Image"/>
        </div>
        <div className={`relative w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-blue-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow1(false)}} onMouseLeave={()=>{setInitialGrow1(true)}}>
        <Image fill src="/ci-cd_pic1.png" alt="Docker_Image"/>
        </div>
        <div className={`w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-cyan-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow1(false)}} onMouseLeave={()=>{setInitialGrow1(true)}}></div>
        <div className={`w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-emerald-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow1(false)}} onMouseLeave={()=>{setInitialGrow1(true)}}></div>
      </div>
      <div className="flex h-80 mt-12 border-4 border-cyan-25 rounded-2xl">
        <div className={`w-[15vw] ${initialGrow2?"grow brightness-100":""} hover:grow brightness-25 hover:brightness-100 bg-amber-600 transition-all duration-600 ease-in-out`}></div>
        <div className={`w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-blue-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow2(false)}} onMouseLeave={()=>{setInitialGrow2(true)}}></div>
        <div className={`w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-cyan-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow2(false)}} onMouseLeave={()=>{setInitialGrow2(true)}}></div>
        <div className={`w-[15vw] hover:grow brightness-25 hover:brightness-100 bg-emerald-600 transition-all duration-600 ease-in-out`} onMouseEnter={()=>{setInitialGrow2(false)}} onMouseLeave={()=>{setInitialGrow2(true)}}></div>
      </div>
    </div>
  )
}

export default page