// Featured.js
import React, { forwardRef } from "react";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import { products } from "../../assets/products/products";

const Featured = forwardRef((props, ref) => {
  const bestsellerProducts = products.filter((product) => product.bestseller);

  return (
    <section className="featured_container" ref={ref}>
      <h1>Our Bestsellers</h1>
      <div className="featured">
        {bestsellerProducts.map((product) => (
          <FeaturedCard
            key={product.id}
            title={product.name}
            price={product.price}
            backgroundImage={product.image}
            link={`/product/${product.id}`}
          />
        ))}
      </div>
    </section>
  );
});

export default Featured;
