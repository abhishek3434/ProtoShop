import React from 'react';
import { ReactComponent as Cart} from '../../assets/cart.svg';
import './CartIcon.scss'
import { connect } from "react-redux";
import { showCart } from "../../redux/cart/cart-action";


const CartIcon = ({showHidden}) => {
    return (  
        <div className="cart-icon" onClick={showHidden}>
            <Cart className="shopping-icon"/>
            <span className='item-count'>0</span>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    showHidden: () => dispatch(showCart()),
  });
  
export default connect(null, mapDispatchToProps)(CartIcon);