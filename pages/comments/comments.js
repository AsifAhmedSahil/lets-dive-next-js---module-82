
const Comments = ({Comments}) => {
  return (
    <div>
        {
            Comments.map(comment=> <h1 key={comment.id} className="my-4 ">Comment Body : {comment.body}</h1>)
        }
    </div>
  )
}

export default Comments

export const getServerSideProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json()

    return{
        props:{
            Comments:data
        }
    }
}