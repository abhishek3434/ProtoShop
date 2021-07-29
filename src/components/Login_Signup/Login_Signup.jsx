import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import "./LoginSignup.scss"

const LoginSignup = () => {
    return (  
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    );
}
 
export default LoginSignup;
