import React from "react";
import "./Menu.scss"

const Menu = ({ title,imageUrl }) => {
  return (
    <div className="menu-item">
      <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'>

      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Menu;
