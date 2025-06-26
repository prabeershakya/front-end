import React, { useState } from 'react'
import { Buttons } from './components/Elemets';


const Contact = () => {
  const[like, setliked] = useState(false);
  const[dark, setdark]= useState(false);
  return (
    <div className='bg-green-200'>
      <h1> Like me </h1>
     <button onClick={() => setliked(!like)}
      className={`${like ? "bg-blue-500" : "bg-red-400"} rounded-sm p-2 w-100 mt-10 text-white`}
     >
      {like ? "like👍": "liked❤️"}

     </button>
     
     <div>
      <button onClick={()=> setdark(!dark)} className={`${dark ? "bg-black text-white" : "bg-white"} rounded-sm p-3 w-100 mt-10`}
      >
        {dark ? "dark" : "light"}
     </button>
     <p className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}> hacker</p>
     </div>
    </div>
  )
}

export default Contact
