import React from 'react'
import "./Cart.css"
import{ Divider }from"antd";


const Cart = () => {
  return (
    <div className='cart'>
        <div className="shopping-cart">
            <div className="shopping-cart-title">
            <h1>Shopping Cart</h1>
            </div>
            <span>{4}Courses in Cart</span>
            <div className="divider">
            < Divider className='divider'/>
            </div>
            <div className="cart-item">
                <div className="cart-item-right">
                <div className="cart-img">
                    <img src="https://telusko.com/assets/images/scrollimgtwo.webp" alt="" />
                </div>
                <div className="cart-course">
                    <h3>The Complete Matlab Course for Wireless Comm. Engineering</h3>
                    <p>By navin reddy</p>
                     <span>Beginner</span>
                </div>
                </div>
                <div className='cart-option'>
                    <span>Remove</span>
                    <h3>$2299</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart