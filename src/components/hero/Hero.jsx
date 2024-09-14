import React from "react";
import "./Hero.css";

const Hero = ({ scrollToFeatured, scrollToCarousel, goToProducts }) => {
  return (
    <section className="hero_container">
      <div className="hero">
        <div
          className="hero_soaps"
          onClick={goToProducts}
          role="button"
          tabIndex={0}
          aria-label="Go to soaps"
        >
          <h1>Soaps</h1>
        </div>
        <div
          className="hero_gift_bags"
          onClick={goToProducts}
          role="button"
          tabIndex={0}
          aria-label="Go to gift bags"
        >
          <h1>Gift Bags</h1>
        </div>

        <div
          className="hero_best_sellers"
          onClick={scrollToFeatured}
          role="button"
          tabIndex={0}
          aria-label="Scroll to best sellers"
          style={{ cursor: "pointer" }}
        >
          <h1>Best Sellers</h1>
        </div>

        <div
          className="hero_new"
          onClick={scrollToCarousel}
          role="button"
          tabIndex={0}
          aria-label="Scroll to new products"
          style={{ cursor: "pointer" }}
        >
          <h1>New Products</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
