import React from 'react';
import './CartItem.scss'

const CartItem = ({items}) => {
    const{imageUrl,name,price,quantity}=items;
        return ( 
        <div className="cart-item">
            <img src={imageUrl} alt="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity}X${price}</span>
            </div>
        </div>
     );
}


 
export default CartItem;