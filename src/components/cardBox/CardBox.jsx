import React from "react";
import "./CardBox.css";

export default function CardBox({ icon: Icon, text, smallText }) {
  return (
    <div className="container">
      {Icon && <Icon style={{ fontSize: "3rem", color: "white" }} />}{" "}
      {/* Render the icon if it's provided */}
      <div className="text_container">
        <p>{smallText}</p>
        <h3>{text}</h3>
      </div>
    </div>
  );
}
