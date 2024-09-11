import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <footer className="footer">
      <h1>SoapClub</h1>
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Sign up for updates & promo codes!</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button onClick={() => alert("Signed up!")}>Sign Up</button>
        </div>
        <p className="details">Example E-commerce website by Olivia Eriksson</p>
      </div>

      <div className="footer_nav">
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/products")}>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
