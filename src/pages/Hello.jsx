import React, { useState } from 'react'

const Hello = () => {
  const [dis, setdis]= useState(false);
  const task = ["task1", "task2", "task3"];
  
  return (
    <div>
      <h1 className='text-4xl'> This is a list </h1>
      <button className='bg-black text-white w-20 h-10 rounded-2xl mt-1' onClick={()=> setdis(!dis)}>
        Click me 
      </button>
      { dis && (
        <ul>
          {task.map((task, id) => (
            <li key={id}>{id}. {task}</li>
    
          ))}
        </ul>
      )}
    </div>
  )
}

export default Hello
