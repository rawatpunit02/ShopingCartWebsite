import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
 let user=JSON.parse(localStorage.getItem("user"))
//  console.log(Object.fromEntries(users))
const navigate = useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault();
    console.log(user.Email,user.Password,email,password)
    if(user.Email==email && user.Password==password){
      navigate('/Home')
    }
    else{
      alert("Credential are not walid")
    }

}
  return (
    
    <div className='flex flex-col w-full h-full'>
        <div className='self-center m-8'>
            <h1 className='text-[60px] text-[#308641]'>Login To Shop</h1>
        </div>
        <form onSubmit={handleSubmit} className=' flex flex-col w-[60%] h-[60%] m-auto  items-center' >
        
        <input onChange={(e)=>(setEmail(e.target.value))} value={email} className="border w-[60%] h-8 p-2 rounded-xl" type='Email' placeholder="  enter your Email" />
        <br/>
        <input onChange={(e)=>(setPassword(e.target.value))} value={password} className='border w-[60%] h-8 p-2 rounded-xl ' type='password' placeholder="  enter your password" />
        <button className='mt-3 w-[60%] p-2 border rounded bg-[#267035] ' type='submit'>Login</button>
        </form>
        <NavLink to={'/CreateAccount'} className=' mt-5 text-blue-900 self-center'>
        <h1 className=' mt-5 text-blue-900 '>Create New Account</h1>
        </NavLink>
        
    </div>
  )
}

export default Login