import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
  <Wrapper>
      <nav>
          <Logo />     
      </nav>  
      <div className='container page'>
          <div className='info'>
              <h1>
                job
                <span>tracking</span>
                app
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nostrum adipisci. Accusamus maiores quasi dolorum possimus qui dolore, consequuntur culpa praesentium veritatis cupiditate natus fugiat unde eos obcaecati velit at!
              </p>
              <Link to="/register" className='btn register-link'>
               Register
              </Link>
              <Link to='/login' className="btn">
              Login 
              </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
      </div>
  </Wrapper>
  )
}

export default Landing