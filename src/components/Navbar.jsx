import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/Logo.png'

function Navbar() {
  const {cart}=useSelector((state)=>state)
  return (
    <div className=''>
      <nav className='flex  max-w-6xl justify-between items-center h-20  mx-auto '>
        
          <NavLink to='/'>
    <div className='ml-5 '>
         <img src={Logo} className='h-24'></img>
  
    </div>
          </NavLink>
        
     <div className='flex items-center font-medium text-black space-x-6'>
      <NavLink to='/Home'>
      <p>Home</p>
      </NavLink>
      <NavLink to='/Home'>
      <p>About</p>
      </NavLink>
      <NavLink to='/Home'>
      <p>Product</p>
      </NavLink>
      <NavLink to='/Home'>
      <p>Contact</p>
      </NavLink>
      <NavLink to='/Cart'>
  <div className='relative'>
  <IoCartSharp className='text-2xl'/>
  { cart.length>0 &&
   <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
  }
  </div>
      </NavLink>
     
     </div>
      </nav>

    </div>
  )
}

export default Navbar