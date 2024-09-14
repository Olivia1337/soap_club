import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/products/products";
import "../ProductPage/ProductDetail.css";
import {
  FaCartShopping,
  FaEarthEurope,
  FaWeightHanging,
  FaCirclePlus,
  FaCircleMinus,
} from "react-icons/fa6";
import CardBox from "../../components/cardBox/CardBox";
import Carousel from "../../components/carousel/Carousel";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/stores/cart";
import { openCart } from "../../redux/stores/sidebar"; // Import openCart action

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product.id, quantity }));
    dispatch(openCart()); // Open the cart sidebar when an item is added
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <main className="product_detail_container">
      <article className="product_detail">
        <header>
          <h1>{product.name}</h1>
        </header>
        <section className="product_image">
          <figure className="image_and_text">
            <img src={product.image} alt={product.name} />
            <figcaption className="product_info">
              <h2>Price: ${product.price.toFixed(2)}</h2>
              <p className="description">{product.description}</p>
              <p className="additional">
                {product.bestseller ? "Bestseller" : ""}
              </p>
              <p className="additional">{product.new ? "New in stock" : ""}</p>
              <div className="quantity_container">
                <p className="quantity_text">Quantity:</p>
                <button
                  onClick={handleDecrease}
                  aria-label="Decrease quantity"
                  className="quantity_button"
                >
                  <FaCircleMinus size={30} />
                </button>
                <p className="quantity_text">{quantity}</p>
                <button
                  onClick={handleIncrease}
                  aria-label="Increase quantity"
                  className="quantity_button"
                >
                  <FaCirclePlus size={30} />
                </button>
              </div>
              <div className="quantity_container_button">
                <button
                  className="add_to_cart_button"
                  onClick={handleAddToCart}
                  aria-label="Add to cart"
                >
                  Add to Cart
                </button>
                <p>${totalPrice}</p>
              </div>
            </figcaption>
          </figure>
        </section>
      </article>
      <aside className="cardBox_container">
        <CardBox
          smallText={"All products are"}
          text="100% cruelty-free"
          icon={FaEarthEurope}
        />
        <CardBox
          smallText={"Guaranteed"}
          text="3-day delivery"
          icon={FaCartShopping}
        />
        <CardBox
          smallText={"Approximate weight"}
          text={product.size}
          icon={FaWeightHanging}
        />
      </aside>
      <section className="carousel_more_container">
        <Carousel title={"More like this"} />
      </section>
    </main>
  );
};

export default ProductDetail;
