import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  decreaseItem,
  addItems,
} from "../../redux/cart/cart-action";

import "./checkOutItem.scss";

const CheckOutItems = ({
  cartItem,
  removeItem,
  decreaseItem,
  increaseItem,
}) => {
  
  const { name, imageUrl, price, quantity }=cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>increaseItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  increaseItem: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItems);
