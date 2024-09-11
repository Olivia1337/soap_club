import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
const FeaturedCard = ({ price, title, backgroundImage, link }) => {
  return (
    <Link to={link} className="featured_card_image">
      <div
        className="featured_card_image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="featured_card_info">
          <h2>{title}</h2>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
