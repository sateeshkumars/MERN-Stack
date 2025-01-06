import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {
const [name, setName] = useState();
const [email,setEmail] = useState();
const [password, setPassword] = useState();
const navigate = useNavigate();
const handleSubmit = (e) => {
     e.preventDefault();
     axios.post('http://localhost:3001/register', {name, email, password})
     .then(result => { console.log('success message', result); navigate('/login');})
     .catch(err => console.log('error message', err))
}
return (<>
<div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
 <div className='bg-white p-3 rounded w-25'>
   <h2>Registration</h2>
   <form onSubmit={handleSubmit}>
     <div className='mb-3'>
       <label htmlFor='name'>
         <strong>Name</strong>
       </label>
       <input
       type='text'
       placeholder='Enter name'
       autoComplete='off'
       name='name'
       className='form-control rounded-0'
       onChange  = {(e) => setName(e.target.value)}
       ></input>
     </div>
     <div className='mb-3'>
       <label htmlFor='email'>
         <strong>Email</strong>
       </label>
       <input
       type='email'
       placeholder='Enter email'
       autoComplete='off'
       name='email'
       className='form-control rounded-0'
       onChange  = {(e) => setEmail(e.target.value)}
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
       onChange  = {(e) => setPassword(e.target.value)}
       ></input>
     </div>
     <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
   </form>
   <p>Already have an account</p>
   <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
 </div>
</div>
</>
)}

export default Signup;