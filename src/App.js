import './App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Formulaire from './Formulaire/Formulaire';
import ItemsList from './ItemsList/ItemsList';
import { useState } from 'react';

function App() {
  
  const [isLog, SetIsLog] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isLog={isLog} SetIsLog={SetIsLog} />
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
