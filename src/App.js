import React, { Component } from 'react';

import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import Header from "./Resulable_components/Header/Header"
import LoginSignup from "./components/Login_Signup/Login_Signup";

import {Route,Switch} from 'react-router-dom';
import './App.css';
import {auth} from './Firebase/FireBase'

class App extends Component {
  constructor(){
    super();
    this.state={
      user:null
    }
  }
  unsubscribeFromAuth=null;
componentDidMount(){
   this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({user});
    console.log(user);
  })
  
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() { 
    return (
      <div>
        <Header currentUser={this.state.user}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/signin" component={LoginSignup} />
        </Switch>
      
      </div>
    );
  }
}
 
export default  App;
