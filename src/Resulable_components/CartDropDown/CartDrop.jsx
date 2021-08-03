import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import "./CartDrop.scss";

const CartDrop = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton children="GO TO CHECKOUT" />
    </div>
  );
};

export default CartDrop;
