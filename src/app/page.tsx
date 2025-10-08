import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  let scrollY: number = window.scrollY;
  window.addEventListener("scroll", ()=>{
    scrollY=window.scrollY;
  });
  return (
    <>
    <div className="relative h-400 w-lvw">
      <Image src="/bulb_blackBG.jpg" fill alt="Bulb"/>
    </div>
    </>
  )
}

export default page

