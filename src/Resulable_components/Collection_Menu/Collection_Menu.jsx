import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cart-action';

import "./Collection.scss"
import CustomButton from '../CustomButton/CustomButton';
const CollectionMenu = ({items,addItem}) => {
    const{name,price,imageUrl}=items;
    return ( 
        <div className="collection-item">
            <div className="image" style={{ backgroundImage:`url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                
            </div>
            <CustomButton onClick={()=>addItem(items)} inverted>ADD TO CART</CustomButton>

        </div>
     );
}

const mapDispatchTOProps=dispatch=>({
    addItem:(item)=>dispatch(addItems(item))
})
 
export default connect(null,mapDispatchTOProps)(CollectionMenu);