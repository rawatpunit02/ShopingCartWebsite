import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/slices/cartSlice'
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
function CartItems({ item, itemIndex }) {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item removed")
  }
  return (

    <div className='flex items-center my-12 pb-12 border-b-2 border-gray-700 '>
      <div className='h-[180px]  w-[190px] px-6'>
        <img src={item.image} className='h-full w-full' />
      </div>
      <div className=' w-[65%] mx-auto h-full px-5'>
        <div>
          <h1 className='font-semibold text-lg text-left truncate mt-1'>{item.title}</h1>
          <h1 className='text-gray-700 text-sm text-left  my-3'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-green-600 font-bold'>${item.price}</p>
          <button className='bg-red-200 rounded-full text-red-600 text-xl p-2' onClick={removeFromCart}>
            <RiDeleteBinLine /> 
          </button>
          </div>
        </div>

      </div>




      )
}

      export default CartItems