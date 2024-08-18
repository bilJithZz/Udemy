import React from 'react'
import "./Slider.css"
import Lets from './Lets'
import Webdevelop from '../Topcourses/Webdevelop'
import { Link } from 'react-router-dom'
import DataScience from '../Topcourses/DataScience'

const Home = () => {
  return (
    <div  className="home">
        <div>
            <div className="home-top">
             <img src="https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg" alt="" /><h1>Welcome,Messi</h1> 
            </div>
            <div className="home-slider">
            <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg" alt="" />
            </div>  
             </div>
         <Lets />
         <div className="top">
          <div> <h2>Top courses in <Link className='link' to='/webdevep'>Web Development</Link></h2></div> 
         <Webdevelop />
         </div>
         <div className="top">
          <div> <h2>Top courses in <Link className='link' to='/DataScience'>DataScience</Link></h2></div> 
         <DataScience />
         </div>
    </div>
  )
}

export default Home