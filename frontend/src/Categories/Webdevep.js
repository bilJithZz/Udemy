
//for each categorie elements
//redirect page od webdevelopment
import React, { useState } from 'react'
import './Webdevep.css'
import{ Divider }from"antd";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import Webdevelop from '../Topcourses/Webdevelop';



const Webdevep = () => {

      const[videostate,setVideostate]=useState(false)
      const[substate,setSubstate]=useState(false)

      const VideoState=()=>{
        setVideostate(prev=>!prev);
      }
      const subState=()=>{
        setSubstate(prev=>!prev);
      }

  return (
    <div className='development'>
        <h1>Development Courses</h1>
        <div className="development1">
<h3>Courses to get you started</h3>
<p>Explore courses from experienced, real-world experts</p>.
 <Webdevelop /></div>
        <h2>Popular topics</h2>
        <div className="popular-development">
      <Link className='link' to='/webdevep' ><h3> Webdevelopment</h3></Link>
      <Link className='link' to='/reactjs' ><h3> React js</h3></Link>
      <Link className='link' to='/webdevep' ><h3> Webd</h3></Link>
      <Link className='link' to='/reactjs' ><h3> React js</h3></Link>
      <Link className='link' to='/webdevep' ><h3> Webd</h3></Link>
      <Link className='link' to='/reactjs' ><h3> React js</h3></Link>
      <Link className='link' to='/webdevep' ><h3> Webd</h3></Link>
      <Link className='link' to='/reactjs' ><h3> React js</h3></Link>
      <Link className='link' to='/webdevep' ><h3> Webd</h3></Link>
      <Link className='link' to='/reactjs' ><h3> React js</h3></Link>
         
        </div>
        <h2>All Web Development courses</h2>
        <div className="development-course">
            <div className="course-sorting">
        <div className="video-duration">
        < Divider className='divider'/>
          <div className="video-h" onClick={VideoState}>
         <h2> Video Duration</h2>
         <FaChevronDown />
         </div>
         { videostate && (
  <div>
    <div className='input'>
      <input type='checkbox' id='duration-0-1' />
      <label htmlFor='duration-0-1'>0-1 Hour (4)</label>
    </div>
    <div className='input'>
      <input type='checkbox' id='duration-1-2' />
      <label htmlFor='duration-1-2'>1-2 Hours (3)</label>
    </div>
    <div className='input'>
      <input type='checkbox' id='duration-2-3' />
      <label htmlFor='duration-2-3'>2-3 Hours (2)</label>
    </div>
    <div className='input'>
      <input type='checkbox' id='duration-3-4' />
      <label htmlFor='duration-3-4'>3-4 Hours (1)</label>
    </div>
    <div className='input'>
      <input type='checkbox' id='duration-4-plus' />
      <label htmlFor='duration-4-plus'>4+ Hours (5)</label>
    </div>
  </div>
)}

          
          < Divider className='divider'/>
        </div>
        <div className="subcategory">
        <div className="video-h" onClick={subState}>
          <h2>Sub Category</h2>
          <FaChevronDown />
          </div>
          { substate&&
            <div>
          <div className="input">
            <input type="checkbox" id='sub-mob'/>
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          <div className="input">
            <input type="checkbox" id='sub-mob' />
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          <div className="input">
            <input type="checkbox" id='sub-mob'/>
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          <div className="input">
            <input type="checkbox" id='sub-mob'/>
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          <div className="input">
            <input type="checkbox" id='sub-mob' />
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          <div className="input">
            <input type="checkbox" id='sub-mob'/>
          <label htmlFor="sub-mob">0-1 Hour (4)</label>
          </div>
          </div>}
        </div>
            </div>
            <div className="course-details">
                <div className="course-info">
            <div className="course-img">
                <img src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid" alt="" />
            </div>
            <div className="course-details">
            <h2>The Complete 2024 Web Development Bootcamp</h2>
            <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
            <span>ali alla</span>
            <span>intermideate</span>
           
            </div>
            <div className="course-price">
               <h1>  400</h1>
            </div>
            </div>
            < Divider className='divider'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Webdevep