import './App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState , useEffect } from 'react';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Formulaire from './Formulaire/Formulaire';
import ItemsList from './ItemsList/ItemsList';

function App() {

  let localProducts = localStorage.getItem("stock");

  function checkLocalProducts() {
    if (localProducts) {
      let parseProducts = JSON.parse(localProducts);
      return parseProducts;
    } else {
      return ([]);
    }
  }
  
  const [productsList, setProductsList] = useState(checkLocalProducts());

  useEffect(() => {
    localStorage.setItem("stock", JSON.stringify(productsList));
  },[productsList]);

  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/additem">
            <Formulaire  productsList={productsList} setProductsList={setProductsList} />
          </Route>
          <Route path="/itemslist">
            <ItemsList productsList={productsList} setProductsList={setProductsList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
