import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { container, PostCard } from '../components'

function AllPosts() {
    const [posts, setposts] = useState([])
    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=>{
        if (posts) {
            setposts(posts.documents)
        }
    } )
  return (
    <div className='w-full py-8'>
      <container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
      </container>
    </div>
  )
}

export default AllPosts
