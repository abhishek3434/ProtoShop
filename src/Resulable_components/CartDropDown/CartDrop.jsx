import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { showCart } from "../../redux/cart/cart-action";

import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from "reselect";

import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router";

import "./CartDrop.scss";

const CartDrop = ({ cartItem, user, history, dispatch }) => {
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
          user ? history.push("/checkout") : history.push("/signin");
          dispatch(showCart());
        }}
        inverted
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
  user: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(CartDrop));
