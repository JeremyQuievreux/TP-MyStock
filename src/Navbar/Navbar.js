import './Navbar.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function Navbar() {

  const [isLog, SetIsLog] = useState();

  useEffect( ()=> {
    isLoged();
  }, [isLog]);
  
  function showMenu() {
    if (isLog) {
      return(
        <div className="menu">
          <Link to="/"><button>Accueil</button></Link>
          <Link to="/additem"><button>Ajouter Produits</button></Link>
          <Link to="/itemslist"><button>Voir Stock</button></Link>
          <Link to="/"><button onClick={() => logOut()}>Log Out</button></Link>
        </div>
      )
    } else {
      return(
        <div className="menu">
          <button onClick={() => beConnect()}>Se Connecter</button>
        </div>
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
    <div className="Navbar">
      <h1>My Stock <span>©</span></h1>
      <p><span className="golden"> Le Café de la Place</span></p>
      {showMenu()}
    </div>
  );
}

export default Navbar;
