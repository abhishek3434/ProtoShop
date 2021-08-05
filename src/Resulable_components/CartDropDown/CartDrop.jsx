import React from "react";
import { connect } from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart-selector";

import CartItem from "../CartItem/CartItem";

import CustomButton from "../CustomButton/CustomButton";
import "./CartDrop.scss";

const CartDrop = ({cartItem}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map(item=>(
          <CartItem key={item.id} items={item}/>
        ))}
      </div>

      <CustomButton children="GO TO CHECKOUT" inverted />
    </div>
  );
};

const mapStateToProps=(state)=>({
  cartItem:selectCartItems(state)
})
export default connect(mapStateToProps)(CartDrop);
