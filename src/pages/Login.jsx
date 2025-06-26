import toast from 'react-hot-toast';
import { useState } from 'react';
import { loginUserApi } from '../api/api';
import { jwtDecode }from 'jwt-decode'

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    
    const submit = async (e) => {
        e.preventDefault();
        
        if (!email || !password ) {
            return toast.error("You are Required to fill all fields");
        } 

        const data = {
            email: email, password: password
        }

        try {
            
        const response = await loginUserApi(data);
        if (response ?.data?.success) {
            localStorage.setItem("token", response?.data?.token)
            toast.success(response?.data.message)
            const decode = jwtDecode(response?.data?.token)
            if(decode.role == "admin") {
                setTimeout(() => {
                    return window.location.href="/Dashboard"
                }, 1000);
            } else {
                setTimeout(() => {
                    return window.location.href="/HomePage"
                }, 1000);
            }
            return
        }
        else {
            return toast.error(response?.data?.message)
        }
        }

        catch(err) {
            console.error("Error Loging User", err);
            return toast.error(err?.response?.data?.message)
        }
}

  return (
    <div className='flex justify-center mt-50'>
      
        <div>
            <form onSubmit={submit}>
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border border-black mt-1 ml-1'  /><br />
                <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'className='border border-black mt-1 ml-1'  />
                <br />
                <button type="submit" className='bg-green-900 text-white rounded-2xl p-2 mt-2' >
                Submit
                 </button>            
            </form>
        

        </div>
      </div>
  )
}

export default Login
