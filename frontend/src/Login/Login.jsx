import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
      <div className="login-img">
        <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp" alt="" />
      </div>
      <div className="login-right">
        <h1>Log in to continue your learning journey</h1>
        <form action=""> 
          <input type="text" placeholder='Password' />
        <button>Log in</button>
        </form>
        <div>
          <span>Or Forgot Password</span>
          <div><p>Other Login Option</p></div>
        </div>
        </div>
    </div>
  )
}

export default Login