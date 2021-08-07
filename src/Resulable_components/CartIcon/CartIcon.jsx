import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";

import "./CartIcon.scss";
import { connect } from "react-redux";
import { showCart } from "../../redux/cart/cart-action";
import { createStructuredSelector } from 'reselect';


import { selectCartCount } from "../../redux/cart/cart-selector";

const CartIcon = ({ showHidden,count}) => {
  return (
    <div className="cart-icon" onClick={showHidden}>
      <Cart className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  showHidden: () => dispatch(showCart()),
});

const mapStateToProps = createStructuredSelector({
  count: selectCartCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
