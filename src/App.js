import './App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Formulaire from './Formulaire/Formulaire';
import ItemsList from './ItemsList/ItemsList';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/additem">
            <Formulaire />
          </Route>
          <Route path="/itemslist">
            <ItemsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
