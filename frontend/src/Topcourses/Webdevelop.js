//for redirect from homepage
//and is top course in webdevelopment
import React from 'react';
import './Webdevelop.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Webdevelop = () => {
  return (
      <Carousel className="wepdevops" responsive={responsive}>
       
        <div className="each">
          <img
            src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
            alt="JavaScript Course"
          />
          <h2>JavaScript for Beginners</h2>
          <span>SkillSprint lin</span>
          <h3>$354</h3>
        </div>
       

        {/* Repeat similar blocks for other carousel items */}
       
        <div className="each">
          <img
            src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
            alt="JavaScript Course"
          />
          <h2>JavaScript for Beginners</h2>
          <span>SkillSprint lin</span>
          <h3>$354</h3>
        </div>
      
        
        <div className="each">
          <img
            src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
            alt="JavaScript Course"
          />
          <h2>JavaScript for Beginners</h2>
          <span>SkillSprint lin</span>
          <h3>$354</h3>
        </div>
        
        <div className="each">
          <img
            src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
            alt="JavaScript Course"
          />
          <h2>JavaScript for Beginners</h2>
          <span>SkillSprint lin</span>
          <h3>$354</h3>
        </div>
       
        {/* </div> */}
        {/* Add more blocks as needed */}
      </Carousel>
    // </div>
  );
};

export default Webdevelop;
