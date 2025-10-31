"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { sentences } from '../constants/learnX'

function page() {
  const s1 = useRef<number>(sentences.length);
  const s2 = useRef<number>(sentences[0].length);
  const i1 = useRef<number>(0);
  const i2 = useRef<number>(0);
  const direction = useRef<number>(1);
  const [sentence, setSentence]=useState<string>("Learn ");


  useEffect(()=>{
    let isCancelled:boolean = false;

    const repeat = () => {
      if (isCancelled) return;
      if(i2.current < s2.current){
        if(i2.current == -1){
          i1.current = (i1.current + 1) % s1.current;
          s2.current = sentences[i1.current].length;
          i2.current = 0;
          direction.current = 1;
          let ch=sentences[i1.current][i2.current];
          setSentence(prev => prev + ch);
          i2.current++;
          
          setTimeout(repeat, 100);
        }
        else{
          if(direction.current){
            let ch=sentences[i1.current][i2.current];
            setSentence(prev => prev + ch);
            i2.current++;
            setTimeout(repeat, 100);
          }
          else{
            setSentence(prev => prev.slice(0, -1));
            i2.current--;
            setTimeout(repeat, 50);
          }
        }
      }
      else{
        direction.current = 0;
        i2.current--;
        setTimeout(repeat, 700);
      }
    };
  
    const timeout = setTimeout(repeat, 1000);
  
    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
    <div className="relative h-[150vw] w-full">
      <Image src="/library1.jpg" fill alt="BG"/>
      <div className="absolute top-44 w-full px-32">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-3 text-3xl md:4xl lg:text-5xl font-bold text-amber-50">
            <p>Hunt your doubts,</p>
            <p>Catch Clearity</p>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-8 text-xl lg:text-2xl text-amber-50">
          <p>{sentence}</p>
          <p className="text-amber-50 animate-blink">|</p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-16">
          <div className="w-full aspect-square bg-cyan-600">

          </div>
          <div className="w-full aspect-square bg-cyan-600">

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page

