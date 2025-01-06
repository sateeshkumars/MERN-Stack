import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
         axios.post('http://localhost:3001/login',{email, password})
         .then(result => result.data === 'Success' ? navigate('/home') : navigate('/login'))
         .then(err => console.log('error login', err));
    }
    return(<>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
   <div className='bg-white p-3 rounded w-25'>
   <h2>Login</h2>
   <form onSubmit={handleSubmit}>
     <div className='mb-3'>
       <label htmlFor='name'>
         <strong>Username</strong>
       </label>
       <input
       type='text'
       placeholder='Enter name'
       autoComplete='off'
       name='name'
       className='form-control rounded-0'
       onChange={(e) => setEmail(e.target.value)}
       ></input>
     </div>
     <div className='mb-3'>
       <label htmlFor='password'>
         <strong>Password</strong>
       </label>
       <input
       type='password'
       placeholder='Enter password'
       autoComplete='off'
       name='password'
       className='form-control rounded-0'
       onChange={(e) => setPassword(e.target.value)}
       ></input>
     </div>
     <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
   </form>
 </div>
</div></>)
}

export default Login