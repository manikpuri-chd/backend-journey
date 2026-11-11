import React, {useState} from 'react'

const Feed = () => {

    const [posts, setposts] = useState([{
        _id:1,
        image:"https://picsum.photos/500/500",
        caption:"This is a beautiful sea landscape"
    }])

  return (
    <section className='feed-section'>
      {
        posts.length > 0 ? (
            posts.map((post)=>(
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <h1>No posts available</h1>
        )
      }
    </section>
  )
}

export default Feed