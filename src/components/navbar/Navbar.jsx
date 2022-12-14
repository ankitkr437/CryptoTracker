import {React,useRef} from 'react'
// import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
 
   return (
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
    
    <div className="nav-title">
      <Link to='/' >
      <img  src='/images/cryptologo.png' className="Cryptologo" alt='Cryptologo'></img>
        Cryptoworld
       </Link>
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check" >
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links" >
      <Link to="/" id="Menulink" >
        <img  src='/images/home.png' className="nav-links-img" alt=''></img>
        Home
      </Link>
      <Link to="/cryptocurrencies" id="Menulink">
      <img  src='/images/cryptocurrency.png' className="nav-links-img" alt=''></img>
        Cryptocurrencies
        </Link>
      <Link to="/news" >
      <img  src='/images/news.png' className="nav-links-img" alt=''></img>
        News
      </Link>
    </div>
  </div>
   )
 }
 
 export default Navbar