import React, { Component } from "react";
import FormInput from "../../Resulable_components/FormInput/FormInput";
import CustomButton from "../../Resulable_components/CustomButton/CustomButton";

import {auth,signInWithGoogle} from "../../Firebase/FireBase"
import "./SignIn.scss"

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const{email,password}=this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:"",password:""})


    }
    catch(error){
      console.log(error);

    }
  };


  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
           
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            
          />
          <div className="button">
          <CustomButton children="SIGN IN" type="submit" value="SubmitForm"/>
          <CustomButton children="SIGN IN WITH GOOGLE" isGoogle onClick={signInWithGoogle}/>


          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
