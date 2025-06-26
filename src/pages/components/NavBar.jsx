import React, { useState } from 'react'
import { Link } from 'react-router'
const NavBar = () => {
  const [dark, setdark]= useState(false);

  return (
    <div className={`${dark ? "trasition delay-300 duration-200 bg-black text-white" : "trasition delay-300 duration-200 bg-gray-100 text-black"} flex  justify-center h-10 overflow-hidden`}
    >
      <div>
      
      <p className={`${dark ? "trasition delay-300 duration-200 bg-black text-white" : "trasition delay-300 duration-200 bg-grey-100 text-black"} p-2 font-extrabold scale-115 `}
      >Jazz</p>
      </div>

      <div className=' '>
      <Link to={'/'}className='pr-4 pl-4 p-2 text-shadow-white'>Home</Link>
      <Link to={'/about'} className='pr-4 pl-4 p-2 text-shadow-white' >About</Link>
      <Link to={'/contact'}className='pr-4 pl-4 p-2 text-shadow-white'>Contact</Link>
      <Link to={'/Register'}className='pr-4 pl-4 p-2 text-shadow-white'>Register</Link>
      <Link to={'/Hello'}className='pr-4 pl-4 p-2 text-shadow-white'>Hello</Link>
      <Link to={'/form'}className='pr-4 pl-4 p-2 text-shadow-white'>form</Link>
      <Link to={'/Login'}className='pr-4 pl-4 p-2 text-shadow-white'>Login</Link>
      <button onClick={() => setdark(!dark) } 
      className='bg-green-800 w-20 h-7 mt-1.5 rounded-2xl transition delay-100 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-105'>
        {
          dark ? "🌙" : "☀️"
        }
      </button>
      </div>
    </div>

  )
}

export default NavBar