import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="about-footer">
          <div className="crypto-logo">
            <img
              src="/images/logo1.png"
              className="crypto-logo-img"
              alt="Crypto-logo img"
            ></img>
          </div>
          <div className="about-content-container">
            <p className="about-us-title">ABOUT US</p>
            <p className="about-content">
              A website which allows a user to manage a portfolio of
              cryptocurrency coins, displays latest prices, volume and trending
              news for each crypto.
            </p>
          </div>
          </div>
          <div className="footer-bottom-container">
            <p className="copyright">
            Copyright © 2022 CryptoWorld. All Rights Reserved
            </p>
            <div className="footer-link">
              <Link to="/" className="footer-link-item">
                Home
              </Link>
              <Link to="/cryptocurrencies" className="footer-link-item">
                Cryptocurrencies
              </Link>
              <Link to="/news" className="footer-link-item">
                News
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
