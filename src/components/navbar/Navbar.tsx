"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";

function Navbar() {
  const [showResources, setShowResources]=useState<Boolean>(false);
  const [showOptions, setShowOptions]=useState<Boolean>(false);
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  }
  useEffect(() => {
    if(showOptions){
      document.body.classList.add("overflow-hidden");
    }
    else{
      document.body.classList.remove('overflow-hidden');
    }
  }, [showOptions]);
  return (
    <>
    <div className={`absolute top-0 z-[2] w-full py-4 px-12 flex items-center justify-between lg:bg-transparent ${showOptions?"bg-[#001219]":""}`}>
      <div className="flex items-center gap-2">
        <div className="relative h-14 w-14">
          <Image src="/panda_pic0.png" fill alt="logo"/>
        </div>
        <p className="text-teal-600 text-xl font-bold">Hunting Panda</p>
      </div>
      <div className="hidden lg:flex justify-center items-center">
          <ul className="flex gap-11 font-[450] text-teal-50">
              <li>
                <Link className="block py-4" href="/home">Home</Link>
              </li>
              <li>
                <Link className="block py-4" href="/blog">Blog</Link>
              </li>
              <li className="relative flex flex-col items-center">
                <button className="flex items-center py-4 text-amber-50" onMouseEnter={()=>{setShowResources(true)}} onMouseLeave={()=>{setShowResources(false)}}>Resources<RiArrowDropDownLine size={30}/></button>
                <div 
                  className={`${showResources?"rotate-x-0 rotate-z-0":"rotate-x-90 rotate-z-0"} absolute top-14 flex flex-col px-3 py-2 bg-gray-900 text-white border-1 border-gray-700 rounded-lg transition-all duration-300 ease-in-out`}
                  onMouseEnter={()=>{setShowResources(true)}} onMouseLeave={()=>{setShowResources(false)}}
                >
                  <p className="px-3 py-2 hover:bg-gray-800 rounded-lg">Snippets</p>
                  <p className="px-3 py-2 hover:bg-gray-800 rounded-lg">Notes</p>
                </div>
              </li>
              <li>
                <Link className="block py-4" href="/about">About</Link>
              </li>
              <li>
                <Link className="block py-4" href="/contact">Contact</Link>
              </li>
          </ul>
      </div>
      <div className="hidden lg:flex gap-2 text-teal-50  text-sm font-bold">
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50">Log In</button>
        <button className="px-4 py-1 rounded-2xl border-1 border-teal-50 bg-[#00E599] text-stone-800">Sign up</button>
      </div>
      <button className={`flex ${showOptions?"mr-3":""} lg:hidden text-2xl text-teal-50`} onClick={handleShowOptions}>
        {!showOptions && <TiThMenu />}
        {showOptions && <GiCrossMark />}
      </button>
    </div>
    <div className={`${showOptions?"rotate-x-0 rotate-z-0":"opacity-5 rotate-x-90 rotate-z-0"} origin-top absolute top-0 z-[1] w-full h-full flex flex-col lg:hidden justify-between px-12 py-4 bg-[#001219] transition-all duration-300 ease-in-out`}>
      <ul className="flex flex-col text-amber-50 mt-22">
        <li className="my-5 border-b-1 border-[#343a40]">Home</li>
        <li className="my-5 border-b-1 border-[#343a40]">Blog</li>
        <li className={`${showResources?"mt-5":"my-5"} mt-5 flex justify-between w-full border-b-1 border-[#343a40]`} onClick={()=>{setShowResources(prev=>!prev)}}>
          Resources
          <RiArrowDropDownLine size={30}/>
        </li>
        <li className={`${showResources?"rotate-x-0 rotate-z-0 py-5 px-2":"rotate-x-90 rotate-z-0 h-0 opacity-20"} flex flex-col w-full gap-2 bg-gray-900 rounded-xl transition-all duration-300 ease-in-out`}>
          <p className="py-1 px-2 hover:bg-gray-800 rounded-lg">Snippets</p>
          <p className="py-1 px-2 hover:bg-gray-800 rounded-lg">Notes</p>
        </li>
        <li className="my-5 border-b-1 border-[#343a40]">Contact</li>
        <li className="mt-5 border-b-1 border-[#343a40]">About</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-1 text-amber-50 text-sm font-bold">
        <button className="flex-1 py-2 rounded-3xl border-1 border-white">Log In</button>
        <button className="flex-1 py-2 rounded-3xl border-1 border-white bg-[#00E599] text-stone-800">Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Navbar