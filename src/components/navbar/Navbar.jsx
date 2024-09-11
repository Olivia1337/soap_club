import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCartShopping, FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toggleCart } from "../../redux/stores/sidebar";
import CartItem from "../cartItem/CartItem";
import { products } from "../../assets/products/products";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.sidebar.isCartOpen);
  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [smallScreenMenu, setSmallScreenMenu] = useState(false);

  // Detect cart total update
  useEffect(() => {
    let totalQty = 0;
    let totalAmt = 0;

    carts.forEach((item) => {
      const product = products.find((prod) => prod.id === item.productId);
      if (product) {
        totalQty += item.quantity;
        totalAmt += product.price * item.quantity;
      }
    });

    setTotalQuantity(totalQty);
    setTotalAmount(totalAmt.toFixed(2)); // Ensure two decimal places
  }, [carts]);

  // Toggle the cart visibility
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  // Toggle the mobile menu
  const handleMenuClick = () => {
    setSmallScreenMenu(!smallScreenMenu);
  };

  // Close mobile menu on screen resize > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSmallScreenMenu(false); // Close the mobile menu
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <p>SoapClub</p>
        </Link>
      </div>

      <div className={smallScreenMenu ? `nav_menu_mobile` : `nav_menu`}>
        <FaX size={40} className="close_menu" onClick={handleMenuClick} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="cart_container">
          <FaCartShopping
            size={40}
            className="shopping_icon"
            onClick={handleToggleCart}
          />
          <p className="quantity_number">{totalQuantity}</p>
        </div>
      </div>

      <FaBars size={40} className="hamburger_menu" onClick={handleMenuClick} />
      <div className={`cart_slide_out ${isCartOpen ? "show" : ""}`}>
        <h2>Your Cart</h2>

        <div>
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </div>
        <div className="navbar_buttons_container">
          <h2>Total: ${totalAmount}</h2>
          <button
            className="add_to_cart_button_close"
            onClick={handleToggleCart}
          >
            Close
          </button>
          <button className="add_to_cart_button" onClick={handleToggleCart}>
            Checkout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
