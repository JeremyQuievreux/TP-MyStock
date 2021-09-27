import './Formulaire.scss';

function Formulaire() {
  return (
    <div className="formulaire-page">
      <div className="formulaire">
        <div className="input-element">
          <label htmlFor="item-name">Désignation du produit :</label>
          <input type="text" name="item-name" id="item-name" />
        </div>
        <div className="input-element">
          <label htmlFor="item-quantity">Quantité :</label>
          <input type="number" name="item-quantity" id="item-quantity"/>
        </div>
        <div className="input-element">
          <label htmlFor="item-buy-price">Prix d'achat HT :</label>
          <input type="number" name="item-buy-price" id="item-buy-price" />
        </div>
        <div className="input-element">
          <label htmlFor="item-sell-price">Prix de vente HT :</label>
          <input type="number" name="item-sell-price" id="item-sell-price" />
        </div>
        <div className="input-element">
          <p>Marge HT : </p>
          <p>ici calcule marge</p>
        </div>
        <div className="input-element">
          <p>Prix de vente TTC :</p>
          <p>ici calcul prix TTC</p>
        </div>
        <div className="input-element">
          <label htmlFor="item-type">Type de produit :</label>
          <select name="item-type" id="item-type">
            <option value="alcool">Boisson Alcoolisée</option>
            <option value="no-alcool">Boisson non-alcoolisée</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div className="input-element">
          <label htmlFor="item-degree">Degré d'alcool : </label>
        </div>

      </div>
    </div>
  );
}

export default Formulaire;
