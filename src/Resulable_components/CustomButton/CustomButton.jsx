import React from 'react';
import './Custombutton.scss'

const CustomButton = ({children,isGoogle,...otherProps}) => {
    return (  
        <button className={`${isGoogle?'google-button':''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}
 
export default CustomButton;