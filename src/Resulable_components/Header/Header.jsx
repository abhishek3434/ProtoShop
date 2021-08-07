import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDrop from '../CartDropDown/CartDrop';

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';

import {Link} from 'react-router-dom';
import { auth } from '../../Firebase/FireBase';
import "./Header.scss"

const Header = ({currentUser,show}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser?<div className="option" onClick={()=>auth.signOut()}>SignOut</div>:
                    <Link className="option" to="/signin">SignIn</Link>
                }
                <CartIcon/>
            </div>
            {show?<CartDrop/>:null}
        </div>
      );
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    show:selectCartHidden
})
 
export default connect(mapStateToProps)(Header);
