import React from "react";
import "./CardBox.css";

export default function CardBox({ icon: Icon, text, smallText }) {
  return (
    <div className="container">
      {Icon && (
        <div className="icon_container">
          <Icon style={{ fontSize: "3rem", color: "white" }} />
        </div>
      )}
      {/* Render the icon if it's provided */}
      <div className="text_container">
        {smallText && <p id="cardbox-heading">{smallText}</p>}
        <h3>{text}</h3>
      </div>
    </div>
  );
}
