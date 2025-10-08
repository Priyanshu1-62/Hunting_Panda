import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <>
    <div className="h-40 w-40">
      Hii
      <Image
        src="/bulb_blackBG.jpg"
      />
    </div>
    </>
  )
}

export default page