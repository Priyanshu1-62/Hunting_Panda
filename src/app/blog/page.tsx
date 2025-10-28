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
    <div className="">
      
    </div>
  )
}

export default page