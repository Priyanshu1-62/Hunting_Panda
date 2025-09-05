"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function page() {
  const [blogs, setBlogs]=useState([]);

  const fetchBlogs = async () => {
    const res=await fetch("http://localhost:3000/api/blogs");
    const data=await res.json();
    setBlogs(data);
  }
  useEffect(()=>{
    fetchBlogs();
  }, []);
  return (
    <div className="px-5 md:px-16 lg:px-24 py-5">
      <div>
        {blogs.map((blogItem)=>{
          return <div key={blogItem.slug} className="mt-10 px-3 py-3 border-8 border-zinc-500 rounded-lg">
            <h2 className="mb-2 text-3xl font-bold">{blogItem.title}</h2>
            <h3 className="mb-2 text-xl">{blogItem.description}</h3>
            <div className="h-70 mb-2 border-1 border-zinc-500">

            </div>
            <div className="flex flex-row-reverse">
              <Link 
                href={`http://localhost:3000/blogPost/${blogItem.slug}`}
                className="px-6 py-2 bg-sky-700 text-white rounded-lg"
              >
              See all</Link>
            </div>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default page