import React from "react";
import "./Banner.css";

const Banner = ({ onExploreClick }) => {
  return (
    <section className="banner">
      <div className="banner_container">
        <h1>Elevate Your Everyday Rituals</h1>
        <p>
          Discover SoapClubs 100% cruelty-free products, crafted to perfection
          in different variations. Allowing you to effortlessly combine and
          curate your personal indulgence.
        </p>
        <button onClick={onExploreClick}>Explore Our Collection</button>{" "}
      </div>
    </section>
  );
};

export default Banner;
