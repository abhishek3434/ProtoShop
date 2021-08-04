import React from "react";
import { connect } from 'react-redux';

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
  cartItem:state.cart.collections
})
export default connect(mapStateToProps)(CartDrop);
