import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import Header from "./Resulable_components/Header/Header"
import LoginSignup from "./components/Login_Signup/Login_Signup";

import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {

 

  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/signin" component={LoginSignup} />
      </Switch>
    
    </div>
  );
}

export default App;
