import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='Signup'>
        <div className="img">
        <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp" alt="" />
        </div>
        <div className="right">
        <h1>Sign up and start learning</h1>
        <form action="">
            
            <input type="text" placeholder='Full name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <label>
            <input type="checkbox" name="subscribe" value="newsletter" />
                Send mr special offers persnolise expriance and learning new things 
            </label>
            <button>Sign Up</button>
        </form>
        <span>Other Sign up options</span>
        <span>Already have an account? Log in</span>
        </div>
    </div>
  )
}

export default Signup