import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <>
    <div className="flex h-70">
      <h1 className="">Hunting Panda</h1>
    </div>
    <div className="flex bg-[#3c6e71]">
      <div className="relative w-[40vw] h-[40vw]">
          <Image src="/auth_pic2.png" fill/>
      </div>
    </div>
    <div className="flex flex-row-reverse bg-[#d9d9d9]">
      <div className="relative w-[40vw] h-[40vw]">
          <Image src="/advJS_pic1.png" fill/>
      </div>
    </div>
    <div className="flex bg-[#3c6e71]">
      <div className="relative w-[40vw] h-[40vw]">
          <Image src="/tips_pic1.png" fill/>
      </div>
    </div>
    <div className="flex justify-center items-center h-100 bg-[#d9d9d9]">
      <Link className="px-6 py-2 bg-[#22223b] text-white font-bold" href="blog">Explore more !</Link>
    </div>
    </>
  )
}

export default page