import React from "react";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { showCart } from "../../redux/cart/cart-action";

import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from "reselect";


import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router";

import "./CartDrop.scss";

const CartDrop = ({ cartItem, history,dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map((item) => <CartItem key={item.id} items={item} />)
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>

      <CustomButton
        children="GO TO CHECKOUT"
        onClick={() => {
          history.push(`./checkout`);
          dispatch(showCart())

        }}
        inverted
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDrop));
