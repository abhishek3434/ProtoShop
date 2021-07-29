import React, { Component } from "react";
import "./SignUp.scss";
import "./SignIn.scss";

import { auth } from "../../Firebase/FireBase";

import FormInput from "../../Resulable_components/FormInput/FormInput";
import CustomButton from "../../Resulable_components/CustomButton/CustomButton";

class SignUP extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const {  email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password is not matching with currentpassword");
      return;
    }
    try {
       await auth.createUserWithEmailAndPassword(email, password);
      const update = auth.currentUser;
      update
        .updateProfile({
          displayName: this.state.displayName,
        })
        .then(() => {
          console.log(this.state.displayName);
        })
        .catch((error) => {
          console.log(console.error());
        });
        console.log(this.state)

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
    
  };


  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={this.state.displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton children="SignUp" value="submitform" />
        </form>
      </div>
    );
  }
}

export default SignUP;
