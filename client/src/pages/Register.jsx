import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' labelText='First Name' defaultValue='Thomas'/>
        <FormRow type='text' name='lastName' labelText='Last Name' defaultValue='Kim'/>
        <FormRow type='text' name='location' defaultValue='US'/>
        <FormRow type='email' name='email' defaultValue='thomas@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='password123'/>
        <button type='submit' className='btn btn-block'>submit</button>
        <p>
          Already a member?
        <Link to ='/login' className='member-btn'>Login</Link>
        </p>
      </form>
      </Wrapper>
  )
}

export default Register