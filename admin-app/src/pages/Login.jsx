import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

function Login() {
  return (
    <div className='py-5' style={{background:"#ffd333", minHeight:"100vh"}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form action="">
          <CustomInput type="text" label="Email Address" i_id="email"/>
          <CustomInput type="password" label="Password" i_id="password"/>
          <div className='mb-3 text-end'>
            <Link to='/forgot-password'>Forgot Password</Link>
          </div>
          <Link to='/admin' type="submit" className='px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{background:'#ffd333'}}>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Login