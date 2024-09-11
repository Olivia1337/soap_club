import React, { useEffect, useState } from "react";
import { products } from "../../assets/products/products";
import "../cartItem/CartItem.css";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../redux/stores/cart";

export default function CartItem(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
    console.log(detail);
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
  return (
    <div className="cart_item_container">
      <img src={detail.image} className="cart_image" />
      <h2 className="cart_title">{detail.name}</h2>
      <p className="cart_subtitle">${detail.price * quantity}</p>
      <div className="quantity_container">
        <FaCircleMinus
          size={30}
          style={{ cursor: "pointer" }}
          onClick={handleMinusQuantity}
        />
        <p className="quantity_text">{quantity}</p>
        <FaCirclePlus
          size={30}
          style={{ cursor: "pointer" }}
          onClick={handleAddQuantity}
        />
      </div>
    </div>
  );
}
