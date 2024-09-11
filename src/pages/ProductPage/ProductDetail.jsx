// src/components/ProductDetail/ProductDetail.js
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
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/stores/cart";
import { openCart } from "../../redux/stores/sidebar"; // Import openCart action

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product.id, quantity: quantity }));
    dispatch(openCart()); // Open the cart sidebar when an item is added
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <section className="product_detail_container">
      <div className="product_detail">
        <div className="product_image">
          <h1>{product.name}</h1>
          <div className="image_and_text">
            <img src={product.image} alt={product.name} />
            <div className="product_info">
              <h2>Price: ${product.price.toFixed(2)}</h2>
              <p className="description">{product.description}</p>
              <p className="additional">
                {product.bestseller ? "Bestseller" : ""}
              </p>
              <p className="additional">{product.new ? "New in stock" : ""}</p>
              <div className="quantity_container">
                <p className="quantity_text">Quantity:</p>
                <FaCircleMinus
                  size={30}
                  onClick={handleDecrease}
                  style={{ cursor: "pointer" }}
                />
                <p className="quantity_text">{quantity}</p>
                <FaCirclePlus
                  size={30}
                  onClick={handleIncrease}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="quantity_container_button">
                <button
                  className="add_to_cart_button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardBox_container">
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
      </div>
      <div className="carousel_more_container">
        <Carousel title={"More like this"} />
      </div>
    </section>
  );
};

export default ProductDetail;
