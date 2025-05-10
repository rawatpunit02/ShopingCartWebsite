import React from 'react'
import img from '../assets/icon.png'

function HeroSection() {
  return (

   <div className='bg-[#F7FAFC] p-2'>
     <div className='flex  max-w-4xl h-[300px] gap-[5rem] m-auto mt-8   '>
        <div className='flex w-1/2 flex-col'>
            <p className='text-blue-600' >WELCOME TO</p>
            <h1 className='text-6xl'>Rawat Store</h1>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit officiis magni maiores.
            </p>
            <button className='bg-indigo-700 w-32 h-11 mt-8  text-amber-50 self-start' >Shop Now</button>
        </div>
        <div className='flex '>
            <img  className="w-80 h-64" src={img} alt="" />
        </div>
    </div>
   </div>
  )
}

export default HeroSection