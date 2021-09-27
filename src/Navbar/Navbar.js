import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>My Stock <span>©</span></h1>
      <p><span className="golden"> Le Café de la Place</span></p>
      <div className="menu">
          <Link to="/"><button>Accueil</button></Link>
          <Link to="/additem"><button>Ajouter Produits</button></Link>
          <Link to="/itemslist"><button>Voir Stock</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
