import HomePage from "./components/HomePage/HomePage"
import Shop from "./components/Shop/Shop"
import {Route} from 'react-router-dom';
import './App.css';

function App() {

 

  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={Shop}/>
    </div>
  );
}

export default App;
