import Post from "../../components/Posts/Post";


const Posts = ({posts}) => {
  return (
    <div>
       
        {
            posts.map(post => <Post post={post} key={post.id}/>)
        }
    </div>
  )
}

export default Posts;

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json();
    

    return {
        props: {
            posts: data
        }
    }
}