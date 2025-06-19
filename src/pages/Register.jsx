import React, {useState} from 'react'

const Register = () => {
    const [name, setname] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const submit = () => {

    }
  return (
    <div>
      <form>
        <input type="text" name='name' value={name} onChange={(e) => setname(e.target.value)} placeholder='Username' className='border border-black '/>
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border border-black'  />
        <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'className='border border-black mr-'  />
      </form>
      <button onClick={submit}
      className='bg-green-900 w-25 h-10 mt-2 text-amber-50 rounded-2xl overflow-hidden'>
        Submit
      </button>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
    </div>
  )
}

export default Register
