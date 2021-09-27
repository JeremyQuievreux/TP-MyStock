import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar({isLog, SetIsLog}) {

  let localLog = localStorage.getItem("mail");

  function setLogin(localLog) {
    if (localLog) {
      SetIsLog(...isLog, true);
    } else {
      SetIsLog(...isLog, false);
    }
  }
  

  function showMenu() {
    if (isLog) {
      return(
        <div className="menu">
          <Link to="/"><button>Accueil</button></Link>
          <Link to="/additem"><button>Ajouter Produits</button></Link>
          <Link to="/itemslist"><button>Voir Stock</button></Link>
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
    SetIsLog(true)
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
