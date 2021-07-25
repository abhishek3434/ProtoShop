import './App.css';
import HomePage from "./components/HomePage/HomePage"
import {Route} from 'react-router-dom';

function App() {

  const hats=()=>(
<h1>Hats</h1>
  );


  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={hats}/>
    </div>
  );
}

export default App;
