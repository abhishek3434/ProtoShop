import React, { Component } from "react";
import { connect } from "react-redux";

import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/Shop";
import Header from "./Resulable_components/Header/Header";
import LoginSignup from "./components/Login_Signup/Login_Signup";
import CheckOut from "./components/CheckOut/CheckOut";

import { setCurrentUser } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserDoc } from "./Firebase/FireBase";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = await createUserDoc(user);

        ref.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/checkout"
            render={() =>
              this.props.currentUser ? <CheckOut /> : <LoginSignup />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginSignup />
            }
          />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
