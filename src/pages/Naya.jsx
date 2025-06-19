import React, {useState} from 'react'

const Naya = () => {
  const [user, setuser]=useState("")
  const [email, setemail]=useState("")
 
  return (
    <div className='bg-amber-200'>
      <p><b>Username</b></p>
      <form>

      <input value={user} onChange={(e) => setuser(e.target.value)} placeholder=''
      className='border border-black' />
      
      <p><b>Email</b></p>
      <input value={email} onChange={(e) => setemail(e.target.value)} placeholder='' 
      className='border border-black' />

      </form>

      <button className='bg-black text-white p-1 my-1' onClick={()=> alert("Form Submitted!!")}>
        Click me
      </button>
    </div>
  )
}

export default Naya
