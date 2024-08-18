import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./Nav.css";
import Categories from './Dropdown/Categories';
import Learning from './Dropdown/Learning';
import Mylearning from './Dropdown/Mylearning';

const Nav = () => {
    const [catadrop, setCatadrop] = useState(false);
    const [mylearn, setMylearn] = useState(false);
    const [wishlist, setWishlist] = useState(false);

    return (
        <div className='udemy-nav'>
            <div className="udemylogo">
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" />
            </div>
            <p 
                onMouseOver={() => setCatadrop(true)} 
                onMouseOut={() => setCatadrop(false)}
            >
                Categories
            </p>
            {catadrop && <Categories />}
            
            <div className="udemy-search">
                <CiSearch className='search-icon' />
                <input type="text" placeholder='Search For Anything' />
            </div>
            
            <p 
                onMouseOver={() => setMylearn(true)} 
                onMouseOut={() => setMylearn(false)}
            >
                Tech on Udemy
            </p>
            {mylearn && <Learning />}
            
            <p>Instructor</p>
            
            <CiHeart 
                onMouseOver={() => setWishlist(true)} 
                onMouseOut={() => setWishlist(false)} 
            />
            {wishlist && <Mylearning />}
            
            <MdOutlineShoppingCart />
            <VscBell />
            <IoPersonCircleSharp />
        </div>
    );
}

export default Nav;
