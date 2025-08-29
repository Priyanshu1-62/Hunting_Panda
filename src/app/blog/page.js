"use client"
import React, { useEffect, useState } from 'react'

function page() {
  const [blogs, setBlogs]=useState([]);
  const fetchBlogs = async () => {
    const res=await fetch("http://localhost:3000/api/blogs");
    const data=await res.json();
    return data;
  }
  useEffect(()=>{
    const data=fetchBlogs();
    setBlogs(data);
  }, []);
  return (
    <div>blog</div>
  )
}

export default page