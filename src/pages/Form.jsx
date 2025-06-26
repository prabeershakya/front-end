import { useState } from "react";
const FormData = () => {
const [formData, setFormData] = useState({
email: '',
name: '',
});

const handleChange=(e)=>{
const {name, value}=e.target;
setFormData(prev=>({
...prev,
[name]:value
}))
}

const submit=()=>{
alert(formData.name+" "+formData.email)
}
return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
<form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4" onSubmit={submit}>
<h2 className="text-xl font-semibold text-gray-700">User Info</h2>
<input
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Name"
className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
<input
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Email"
className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
<input type="submit" name="submit" id="" />
</form>

<div className="mt-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
<h3 className="text-lg font-medium text-gray-800 mb-2">Live Preview:</h3>
<p><span className="font-semibold text-gray-600">Name:</span> {formData.name}</p>
<p><span className="font-semibold text-gray-600">Email:</span> {formData.email}</p>
</div>
</div>
);
};

export default FormData;