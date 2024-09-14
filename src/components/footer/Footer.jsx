import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <h1>SoapClub</h1>
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Sign up for updates & promo codes!</p>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button
            onClick={() => alert("Signed up!")}
            aria-label="Sign up for newsletter"
          >
            Sign Up
          </button>
        </div>
        <p className="details">Example E-commerce website by Olivia Eriksson</p>
      </div>

      <nav className="footer_nav">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              aria-label="Go to home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleNavigation("/products")}
              aria-label="View products"
            >
              Products
            </Link>
          </li>
          <li>
            <button
              onClick={() => alert("Contact us feature coming soon")}
              aria-label="Contact us"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
