import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
        
      <h3 className="logo">
        <img
          src="/images/cryptologo.png"
          className="Cryptologo"
          alt="Cryptologo"
        ></img>
        Cryptoworld
      </h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li className="menu-item"> 
            <img src="/images/home.png" className="nav-links-img" alt=""></img>
            Home
          </li>
        </Link>
        <Link to="/cryptocurrencies" className="about">
          <li className="menu-item">
            <img
              src="/images/cryptocurrency.png"
              className="nav-links-img"
              alt=""
            ></img>
            Cryptocurrencies
          </li>
        </Link>
        <Link to="/news" className="skills">
          <li className="menu-item">
            <img src="/images/news.png" className="nav-links-img" alt=""></img>
            News
          </li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <CloseOutlinedIcon /> : <DensityMediumOutlinedIcon />}
      </button>
    </nav>
  );
};

export default Header;
