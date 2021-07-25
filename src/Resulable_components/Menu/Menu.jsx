import React from "react";
import "./Menu.scss"
import { withRouter } from "react-router";

const Menu = ({ title,imageUrl,linkUrl,match,history}) => {
  return (
    <div className="menu-item" onClick={()=>{
      history.push(`${match.url}${linkUrl}`)

    }}>
      <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'>

      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(Menu);
