import React from 'react'

function page({ params }) {
  const { title }=React.use(params);
  return (
    <div>{title}</div>
  )
}

export default page