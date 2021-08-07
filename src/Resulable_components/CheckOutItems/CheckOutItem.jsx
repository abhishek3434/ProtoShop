import React from 'react';
import './checkOutItem.scss';

const CheckOutItems = ({cartItem:{name,imageUrl,price,quantity}}) => {
    return ( 
  
                <div className='checkout-item'>
                    <div className='image-container'>
                        <img src={imageUrl} alt='item'/>
                    </div>
                    <span className='name'>{name}</span>
                    <span className='quantity'>{quantity}</span>
                    <span className='price'>{price}</span>
                    <div className='remove-button'>&#10005;</div>
        
                </div>
            );

}
 
export default CheckOutItems;