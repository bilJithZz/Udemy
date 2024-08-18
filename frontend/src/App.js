import React from 'react';
import './App.css';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx';
import Cart from './Cart/Cart.jsx';
import Slider from './Home/Slider.jsx';
import Webdevep from './Categories/Webdevep';
import Webdevelopment from './Course/Webdevelopment.jsx';
import Footer from './Footer.js';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Slider />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/webdevep" element={<Webdevep/>}/>
        <Route path="/course/:id" element={<Webdevelopment/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
