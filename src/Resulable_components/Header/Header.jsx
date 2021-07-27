import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {Link} from 'react-router-dom';
import "./Header.scss"
import { auth } from '../../Firebase/FireBase';

const Header = ({currentUser}) => {
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
            </div>



        </div>
      );
}
 
export default Header;
