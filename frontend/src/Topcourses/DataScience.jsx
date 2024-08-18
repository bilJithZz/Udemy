import React from 'react'
import "./DataScience.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const DataScience = () => {
  return (
    <Carousel className="datascience" responsive={responsive}>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
  <div className='data'>
  <img 
  src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
  alt="JavaScript Course"
    />
    <h1>javaScript</h1>
    <p>javaScript</p>
    <h3>335</h3>
  </div>
</Carousel>
  )
}

export default DataScience