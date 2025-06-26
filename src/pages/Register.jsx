import  {useState} from 'react'
import toast from 'react-hot-toast';
import { createUserApi } from '../api/api';


const Register = () => {
    const [name, setname] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    
    const submit = async (e) => {
        
        e.preventDefault();
          
        if (!name || !email || !password ) {
            return toast.error("You are Required to fill all fields")
        } else {
            toast.success('Submitted')
        }
        try {
            const formData = new FormData();
            formData.append('username', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('role', 'user');
            

            for (let pair of formData.entries()) {
             console.log(pair[0] + ': ' + pair[1]);
             } 
            const response= await createUserApi(formData);
            if (response?.data?.success){
                return toast.success(response?.data?.message || "User Created Successfully");
            }
            else {
                return toast.error(response?.data?.message | "Failed to Create User!");
            }

        } catch (err) {
            console.error("Error creating user:", err);
            toast.error(err?.response?.data?.message || "Something Went Wrong!");
        }
}

  return (
    <div className='flex justify-center mt-50'>
      
        <div>
            <form onSubmit={submit}>
                <input type="text" name='name' value={name} onChange={(e) => setname(e.target.value)} placeholder='Username' className='border border-black mt-1 ml-1'  /><br />
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

export default Register
