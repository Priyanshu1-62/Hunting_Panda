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
      console.log(`${i1.current} ${sentences[i1.current][i2.current]} ${s1.current} ${s2.current} ${direction.current}`);
      if(i2.current < s2.current){
        if(i2.current == -1){
          i1.current = (i1.current + 1) % s1.current;
          s2.current = sentences[i1.current].length;
          i2.current = 0;
          direction.current = 1;
          let ch=sentences[i1.current][i2.current];
          setSentence(prev => prev + ch);
          i2.current++;
          
          setTimeout(repeat, 300);
        }
        else{
          if(direction.current){
            let ch=sentences[i1.current][i2.current];
            setSentence(prev => prev + ch);
            i2.current++;
            setTimeout(repeat, 300);
          }
          else{
            setSentence(prev => prev.slice(0, -1));
            i2.current--;
            setTimeout(repeat, 150);
          }
        }
      }
      else{
        direction.current = 0;
        i2.current--;
        setTimeout(repeat, 1000);
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
      <div className="absolute top-44 w-full px-6">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-3 text-5xl font-bold text-amber-50">
            <p>Hunt your doubts,</p>
            <p>Catch Clearity</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 text-2xl text-amber-50">
          <p>{sentence}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page

