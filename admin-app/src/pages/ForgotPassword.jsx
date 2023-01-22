import React from 'react'
import CustomInput from '../components/CustomInput'

function ForgotPassword() {
  return (
    <div className='py-5' style={{background:"#ffd333", minHeight:"100vh"}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please enter your email to get reset password mail</p>
        <form action="">
          <CustomInput type="email" label="Email Address" i_id="email"/>
          <button type="submit" className='px-3 py-2 text-white fw-bold w-100' style={{background:'#ffd333'}}>Send Link</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword