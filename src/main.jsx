import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import Spinner from './components/Spinner.jsx'
import ElectronicsItems from './pages/ElectronicsItems.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>

 <Provider store={store}>
  
   <App/>  
   <ToastContainer/>

   {/* <Navbar/>
   <HeroSection/>
   <ElectronicsItems/> */}
 
 </Provider>

 </BrowserRouter>

)
