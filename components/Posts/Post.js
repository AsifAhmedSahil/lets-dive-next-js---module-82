import React from 'react'
import Link from "next/Link"

const Post = ({post}) => {
  return (
  <>
    <div className="card mt-10 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link href={`/posts/${post.id}`}>
      <button className="btn btn-primary">See Details</button>
      </Link>
    </div>
  </div>
</div> 
  </>
  )
}

export default Post