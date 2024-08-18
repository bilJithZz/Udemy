import React from 'react'
import './Footer.css'
import{ Divider }from"antd";

const Footer = () => {
  return (
    <div className='footer'>
     <div className='sub-footer'> 
        <p>Top companies choose Udemy Business to build in-demand career skills </p>
        <div className="sub-foot-img">
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
        </div>
        </div> 
        <div className="divide">
        < Divider />
        </div>
         <div className="main-footer">
        <div className="main-footer-element">
        <p>Udemy Business</p>
        <p>Udemy Business</p>
        <p>Udemy Business</p>
        <p>Udemy Business</p>
        <p>Udemy Business</p>
        </div>    
        </div> 
    </div>
  )
}

export default Footer