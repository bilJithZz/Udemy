import React from 'react';
import './Webdevelop.css';
import { FaRegHeart } from "react-icons/fa";
import { BsPlayBtn } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { PiArrowLineDownLight } from "react-icons/pi";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { selectProductById } from '../Redux/couterSlice';

const Webdevelopment = () => {
    const { id } = useParams();
    const numericProductId = parseInt(id, 10);
    const product = useSelector((state) => selectProductById(state, numericProductId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className="course-data">
                <div className='course-heading'>
                    <div className="course-details">
                        <h1>{product.name}</h1>
                        <h3>{product.description}</h3>
                        <span>Created by {product.author}</span>
                        <span>Last updated 8/2024 English [CC], Bulgarian [Auto]</span>
                    </div>
                    <div className="course-content">
                        <img 
                            src={product.image || "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"} 
                            alt={`${product.name} course`}
                        />
                        <div className="options">
                            <h3>Personal</h3>
                            <h3>Teams</h3>
                        </div>
                        <div className="course-price-details">
                            <div className='course-price'>
                                <h1>$499</h1> 
                                <span>$5000</span>
                            </div>
                            <div className="add2cart">
                                <button>Add to Cart</button>
                                <div className="heart"><FaRegHeart /></div>
                            </div>
                            <span>30-Day Money-Back Guarantee<br/>Full Lifetime Access</span>
                            <span>Subscribe to Udemy’s top courses</span>
                            <div className="subscription">
                                <button>Subscription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details"> 
                <h1>Course Details</h1>
                <div className="detail-learn">
                    <h2>What you'll learn</h2>
                    <div className="detail-learn-element">
                        <div className="detail-learn-left">
                            <p>Updated for 2020</p>
                            <p>Learn HTML5, CSS3, Vanilla JS (ES6+), Python, Wagtail CMS, PHP, and MySQL all from scratch</p>
                            <p>Updated for 2020</p>
                            <p>Updated for 2020</p> 
                        </div>
                        <div className="detail-learn-right">
                            <p>Updated for 2020</p>
                            <p>Learn HTML5, CSS3, Vanilla JS (ES6+), Python, Wagtail CMS, PHP, and MySQL all from scratch</p>
                            <p>Updated for 2020</p>
                            <p>Updated for 2020</p>
                        </div>
                    </div>
                </div>
                <div className="course-include"> 
                    <h1>This course includes:</h1> 
                </div>
                <div className="detail-learn-element">
                    <div className="detail-learn-left">
                        <p><BsPlayBtn />{product.duration} hours on-demand video</p>
                        <p><MdOutlineAssignment /> Assignments</p>
                        <p><RiArticleLine /> 21 articles</p>
                        <p><PiArrowLineDownLight /> 16 downloadable resources</p> 
                    </div>
                    <div className="detail-learn-right">
                        <p>Access on mobile and TV</p>
                        <p>Full lifetime access</p>
                        <p>Certificate of completion</p>
                    </div>
                </div>
                <div className="course-class">
                    <div className="course-class-title">
                        <h1>Course content</h1>
                    </div>
                    {product.content && product.content.map((item, index) => (
                        <div key={index} className="course-class-elements">
                            <div className="play-img">
                                <h2><BsPlayBtn /> {item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    );
}

export default Webdevelopment;
