import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
   return (
    <div className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
    
    <div className="nav-title">
      <Link to='/' >
      <img  src='/images/cryptologo.png' className="Cryptologo" ></img>
        Cryptoworld
       </Link>
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <Link to="/">
        <img  src='/images/home.png' className="nav-links-img" ></img>
        Home
        </Link>
      <Link to="/cryptocurrencies">
      <img  src='/images/cryptocurrency.png' className="nav-links-img" ></img>
        Cryptocurrencies
        </Link>
      <Link to="/news">
      <img  src='/images/news.png' className="nav-links-img" ></img>
        News
      </Link>
    </div>
  </div>
   )
 }
 
 export default Navbar