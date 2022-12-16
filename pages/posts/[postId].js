import React from 'react'
import { useRouter } from 'next/router'

const PostDetails  = ({post}) => {

 const router = useRouter();

 const handleBack = () =>{
    router.push("/posts")
 }
  return (
    <div className="card my-10 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{post?.title}</h2>
    <p>{post.body}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
    <button onClick={handleBack} className="btn btn-warning">Back to post</button>
  </div>
</div>
  )
}


export const getStaticProps = async(context) => {
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();
    

    return {
        props: {
            post: data
        }
    }
}

// for getting id

export const getStaticPaths = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    const paths = posts.map(post =>{
        return{
            params:{
                postId : `${post.id}`
            }
        }
    })

    return{
        paths,
        fallback: false,
    }

}
export default PostDetails 