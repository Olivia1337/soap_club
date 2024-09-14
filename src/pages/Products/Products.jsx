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
    <main className="products_container">
      <header>
        <h1>All Our Products</h1>
      </header>
      <nav aria-label="Product categories">
        <ul className="buttons_container">
          <li>
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => filterProducts("all")}
              aria-current={activeCategory === "all" ? "page" : undefined}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={activeCategory === "soap" ? "active" : ""}
              onClick={() => filterProducts("soap")}
              aria-current={activeCategory === "soap" ? "page" : undefined}
            >
              Soaps
            </button>
          </li>
          <li>
            <button
              className={activeCategory === "gift_bags" ? "active" : ""}
              onClick={() => filterProducts("gift_bags")}
              aria-current={activeCategory === "gift_bags" ? "page" : undefined}
            >
              Gift Bags
            </button>
          </li>
        </ul>
      </nav>
      <section className="products_list">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <article key={product.id} className="product_card">
              <Link
                to={`/product/${product.id}`}
                aria-label={`View details of ${product.name}`}
              >
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
              </Link>
            </article>
          ))
        ) : (
          <p>No products found</p>
        )}
      </section>
    </main>
  );
}
