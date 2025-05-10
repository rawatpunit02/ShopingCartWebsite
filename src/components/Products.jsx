import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add,remove } from '../store/slices/cartSlice'
import { toast } from "react-toastify";
function Products({post}) {
  const dispatch=useDispatch()
  const {cart}=useSelector((state)=>state)
  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to Cart")
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
  }
  return (
    <div className='flex flex-col  items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
      <div >
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]' >
        <img  src={`${post.image}`  } className='w-full h-full'/>
      </div>
     <div className='flex justify-between gap-12 items-center w-full mt-5'>
     <div >
        <p className='text-green-600 font-semibold'>${post.price}</p>
      </div>  
          { 
          cart.some((item)=>item.id===post.id)?(<button
             className='text-gray-700 border-2 rounded-full font-semibold text-[12px] p-1  uppercase
            hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={removeFromCart}>
            remove item
           </button>
           
          ):(
            <button className='text-gray-700  text-[12px]  border-2 border-gray-700 rounded-full font-semibold p-1   uppercase
            hover:bg-gray-700  hover:text-white transition duration-300 ease-in' onClick={addToCart}>
              add to cart
            </button>
          )      
          }
     </div>
    </div>
  )
}

export default Products