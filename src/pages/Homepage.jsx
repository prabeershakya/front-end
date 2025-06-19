import React, { useState } from 'react'
const Homepage = () => {
  const[count, setCount] = useState(0);

  return (
    <div className={`flex justify-center`}>
      <div className='bg-yellow-100 my-3'>
        <div>
          <h1 className='p-3 text-3xl '><b>{count}</b></h1>
        <button className="bg-green-500 border rounded-2xl border-black text-white mx-1 p-1"
          onClick={() => setCount(count + 1)}>
          increase
        </button>
        <button className="bg-red-500 border rounded-2xl border-black text-white mx-1  p-1"
          onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="bg-blue-500 border rounded-2xl border-black text-white mx-1 p-1" 
          onClick={() => setCount(0)}>
          reset
        </button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
