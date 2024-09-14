import React, { useEffect, useState } from "react";
import { products } from "../../assets/products/products";
import "../cartItem/CartItem.css";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../redux/stores/cart";

export default function CartItem(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handleAddQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <article className="cart_item_container">
      <img src={detail.image} alt={detail.name} className="cart_image" />
      <h2 className="cart_title">{detail.name}</h2>
      <p className="cart_subtitle">${(detail.price * quantity).toFixed(2)}</p>
      <div className="quantity_container">
        <button
          aria-label="Decrease quantity"
          onClick={handleMinusQuantity}
          disabled={quantity <= 1}
        >
          <FaCircleMinus size={30} />
        </button>
        <p className="quantity_text">{quantity}</p>
        <button aria-label="Increase quantity" onClick={handleAddQuantity}>
          <FaCirclePlus size={30} />
        </button>
      </div>
    </article>
  );
}
