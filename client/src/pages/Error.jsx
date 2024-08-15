import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if(error.status === 404){
      return <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>page not found</h3>
    <Link to="/dashboard">home</Link>

        </div>
      </Wrapper>
  }

  return (
    <div>
    <h1>Error</h1>
    <Link to="/">home</Link>
    </div>
  )
}

export default Error