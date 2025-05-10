import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault()
    console.log(name,email,password);
    let user={Name:name,Email:email,Password: password}
    localStorage.setItem("user",JSON.stringify(user));
    navigate('/')
    }
  return (
    <div className='flex flex-col w-full h-full'>
         <div className='self-center m-8'>
            <h1 className='text-[60px] text-[#308641]'>Create New Account</h1>
        </div>
        <form  onSubmit={handleSubmit} className=' flex flex-col w-[60%] h-[60%] m-auto gap-4  items-center'  >
            <input onChange={(e)=>(setName(e.target.value))} type="text" placeholder='Enter your name' className="border w-[60%] h-8 p-2 rounded" />
            <input type="email" onChange={(e)=>(setEmail(e.target.value))} placeholder='Enter your Email' className="border w-[60%] h-8 p-2 rounded"/>
            <input type="date" placeholder='Enter your Date of birth' className="border w-[60%] h-8 p-2 rounded"/>
            <input type="password" onChange={(e)=>(setPassword(e.target.value))} placeholder='Enter your password'  className="border w-[60%] h-8 p-2 rounded" />
          
           <button type='submit' className="mt-3 w-[60%] p-2 border rounded cursor-pointer  bg-[#372a8d]" >Create Account</button>
           
            
        </form>
    </div>
  )
}

export default CreateAccount