import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center bg-green-600'>
      <a className='pr-4 pl-4 p-2 text-shadow-white' href='/'>Home</a>
      <a className='pr-4 pl-4 p-2 text-shadow-white' href='/about'>About</a>
      <a className='pr-4 pl-4 p-2 text-shadow-white' href='/contact'>Contact</a>
    </div>
  )
}

export default NavBar