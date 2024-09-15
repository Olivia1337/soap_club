import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Products/Products.css";
import { products } from "../../assets/products/products";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to filter products based on the category
  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
    setActiveCategory(category);
  };

  return (
    <section className="products_container">
      <h1>All Our Products</h1>
      <div className="buttons_container">
        <button
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => filterProducts("all")}
          aria-label="Show all products"
        >
          All
        </button>
        <button
          className={activeCategory === "soap" ? "active" : ""}
          onClick={() => filterProducts("soap")}
          aria-label="Show soaps"
        >
          Soaps
        </button>
        <button
          className={activeCategory === "gift_bags" ? "active" : ""}
          onClick={() => filterProducts("gift_bags")}
          aria-label="Show gift bags"
        >
          Gift Bags
        </button>
      </div>
      <div className="products_list">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product_card"
            aria-label={`View details of ${product.name}`}
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
