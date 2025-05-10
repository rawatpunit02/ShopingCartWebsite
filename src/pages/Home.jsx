import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Products from '../components/Products'
function Home() {
  const API_URL='https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false)
  const [posts,setPosts]=useState([])

  const fetchingData=async()=>{
    setLoading(true)
    try {
      const res=await fetch(API_URL)
      const data=await res.json();

      setPosts(data)
    } catch (error) {
      console.log("error detected")
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(()=>{
  fetchingData()
  },[])

  

  return (
    <div>
    { loading? <Spinner/>:
      posts.length>0 ? ( 
        <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]'>
          {
          posts.map((post)=>(   
            <Products key={post.id} post={post}/>
          )) } </div>):
      (<div className='flex justify-center items-center'> 
        <p>no post available</p> </div>)

    }
    </div>
  )
}

export default Home;