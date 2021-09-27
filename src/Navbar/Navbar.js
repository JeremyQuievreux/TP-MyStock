import './Navbar.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function Navbar() {

  const [isLog, SetIsLog] = useState();

  useEffect( ()=> {
    isLoged();
  }, [isLog]);
  
  function showMenu() {
    if (isLog) {
      return(
        <div className="menu">
          <div className="menu-items">
            <Link to="/"><button>Accueil</button></Link>
            <Link to="/additem"><button>Ajouter Produits</button></Link>
            <Link to="/itemslist"><button>Voir Stock</button></Link>
            <Link to="/"><button onClick={() => logOut()}>Log Out</button></Link>
          </div>
        </div>
      )
    } 
  }

  function showLoginBtn(){
    if (!isLog) {
      return(
        <button className="login-btn" onClick={() => beConnect()}>Se Connecter</button>
      )
    }
  }

  function beConnect() {
    localStorage.setItem("mail", "mon mail");
    isLoged();
  }
  function logOut() {
    localStorage.removeItem("mail");
    isLoged();
  }

  function isLoged() {
    let localLog = localStorage.getItem("mail");
    if (localLog) {
      SetIsLog(true);
    } else {
      SetIsLog(false);
    }
  }

  return (
    <Fragment >
    <div className="Navbar">
      <h1>My Stock <span>©</span></h1>
      <p><span className="golden"> Le Café de la Place</span></p>
      {showLoginBtn()}
    </div>
    {showMenu()}
    </Fragment>
  );
}

export default Navbar;
