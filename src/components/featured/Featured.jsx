import React, { forwardRef } from "react";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import { products } from "../../assets/products/products";

const Featured = forwardRef((props, ref) => {
  const bestsellerProducts = products.filter((product) => product.bestseller);

  return (
    <section
      className="featured_container"
      ref={ref}
      aria-label="Featured Products"
    >
      <h1>Our Bestsellers</h1>
      <div className="featured">
        {bestsellerProducts.length > 0 ? (
          bestsellerProducts.map((product) => (
            <article key={product.id} className="featured_card">
              <FeaturedCard
                title={product.name}
                price={product.price}
                backgroundImage={product.image}
                link={`/product/${product.id}`}
              />
            </article>
          ))
        ) : (
          <p>No bestselling products available.</p>
        )}
      </div>
    </section>
  );
});

export default Featured;
