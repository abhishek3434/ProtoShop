import React, { Component } from 'react';
import {connect} from 'react-redux';

import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import Header from "./Resulable_components/Header/Header"
import LoginSignup from "./components/Login_Signup/Login_Signup";
import {setCurrentUser} from './redux/user/user-action'

import {Route,Switch} from 'react-router-dom';
import {auth,createUserDoc} from './Firebase/FireBase'
import './App.css';

class App extends Component {
  
  
  unsubscribeFromAuth=null;

componentDidMount(){
  const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged( async user=>{
    if(user){
       const ref=await createUserDoc(user);
     
    ref.onSnapshot(snapShot=>{
      setCurrentUser({
        id:snapShot.id,
        ...snapShot.data()
      });
    });
  }
  setCurrentUser(user)


  })
  
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() { 
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/signin" component={LoginSignup} />
        </Switch>
      
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
 
export default  connect(null, mapDispatchToProps)(App);
