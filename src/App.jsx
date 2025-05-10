import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ElectronicsItems from './pages/ElectronicsItems'
import HeroSection from './components/HeroSection'
function App() {
 

  return (
   <div>
   
    <div className='bg-gradient-to-r bg-[#f1f5f9]'>
      
    </div>
    <Routes>
    <Route path='/CreateAccount' element={<CreateAccount/>}/>
      <Route path='/' element={<Login/>}/>
      {/* <Route path="/Home" element={<Home/>}/>  */}
      <Route path="/Home" element={
        <>
        <Navbar/>
        <HeroSection/>
        <ElectronicsItems/>
        </>}/>
     <Route path='/cart'element={ <>
        <Navbar/>
       
        <Cart/>
        </>}/> 
    </Routes>
   </div>
  )
}

export default App
