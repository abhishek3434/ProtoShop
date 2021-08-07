import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectTotal } from '../../redux/cart/cart-selector';
import CheckOutItems from '../../Resulable_components/CheckOutItems/CheckOutItem' 

import "./CheckOut.scss"

const CheckOut = ({item,total}) => {
    return ( 
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                    item.map((item)=>
                        <CheckOutItems key={item.id} cartItem={item}/>
                    )
                }
                <div className="total">
                <span>TOTAL=${total}</span>
                </div>
        </div>
     );
}

const mapStateToProps=createStructuredSelector({
    item:selectCartItems,
    total:selectTotal
})

 
export default connect(mapStateToProps)(CheckOut);