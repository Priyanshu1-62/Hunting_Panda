import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className="h-70">

    </div>
    <div className="flex bg-[#3c6e71]">
        <div className="relative w-[40vw] h-[40vw]">
            <Image src="/auth_pic2.png" fill/>
        </div>
    </div>
    <div className="flex flex-row-reverse bg-[#d9d9d9]">
        <div className="relative w-[40vw] h-[40vw]">
            <Image src="/DSA_pic.png" fill/>
        </div>
    </div>
    <div className="h-70 bg-[#3c6e71]">

    </div>
    <div className="h-70 bg-[#d9d9d9]">

    </div>
    <footer className="h-70 bg-neutral-700">

    </footer>
    </>
  )
}

export default page