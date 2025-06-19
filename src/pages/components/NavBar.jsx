import React, { useState } from 'react'
import { Link } from 'react-router'
const NavBar = () => {
  const [dark, setdark]= useState(false);
  return (
    <div className={`${dark ? "trasition delay-300 duration-200 bg-black text-white" : "trasition delay-300 duration-200 bg-white text-black"} flex justify-center h-10 `}
    >
      <Link to={'/'}className='pr-4 pl-4 p-2 text-shadow-white' >Home</Link>
      <Link to={'/about'} className='pr-4 pl-4 p-2 text-shadow-white' >About</Link>
      <Link to={'/contact'}className='pr-4 pl-4 p-2 text-shadow-white'>Contact</Link>
      <Link to={'/naya'}className='pr-4 pl-4 p-2 text-shadow-white'>Naya</Link>
      <Link to={'/Hello'}className='pr-4 pl-4 p-2 text-shadow-white'>Hello</Link>
      <button onClick={() => setdark(!dark) } 
      className='bg-green-800 w-20 h-7 mt-1.5 rounded-2xl transition delay-100 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-105'>
        {
          dark ? "Night" : "Day"
        }
      </button>
    </div>
  )
}

export default NavBar