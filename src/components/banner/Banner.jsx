import React from "react";
import "./Banner.css";

const Banner = ({ onExploreClick }) => {
  return (
    <section className="banner" aria-labelledby="banner-heading">
      <div className="banner_container">
        <h1 id="banner-heading">Elevate Your Everyday Rituals</h1>
        <p>
          Discover SoapClubs 100% cruelty-free products, crafted to perfection
          in different variations. Allowing you to effortlessly combine and
          curate your personal indulgence.
        </p>
        <button onClick={onExploreClick} aria-label="Explore our collection">
          Explore Our Collection
        </button>
      </div>
    </section>
  );
};

export default Banner;
