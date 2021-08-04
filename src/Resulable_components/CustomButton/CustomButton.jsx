import React from "react";
import "./Custombutton.scss";

const CustomButton = ({ children, isGoogle,inverted, ...otherProps }) => {
  return (
    <button
      className={` ${inverted ? "inverted" : ""} ${
        isGoogle ? "google-button" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
