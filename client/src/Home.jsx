import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    return <>
     <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
   <div className='bg-white p-3 rounded w-25'>
   <h2>Home</h2>
  </div>
  <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Go</Link>
  </div>
    </>
}
export default Home