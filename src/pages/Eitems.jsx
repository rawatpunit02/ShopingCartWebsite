import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add,remove } from '../store/slices/cartSlice'
import { toast } from "react-toastify";
function Eitems({post}) {
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
    <div className='flex flex-col  items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
     <div className='h-[200px] w-60 ' >
        <img className='w-full h-full  rounded-md' src={`${post.image}`  } />
      </div>
      <div className='' >
      <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>Brand {post.company}</p>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.name}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      
     <div className='flex justify-between gap-12 items-center w-full mt-5'>
     <div >
        <p className='text-green-600 font-semibold'>₹{post.price/10}</p>
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

export default Eitems