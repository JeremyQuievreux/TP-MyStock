import { useEffect, useState } from 'react';
import './Formulaire.scss';

function Formulaire({ productsList, setProductsList }) {

  const [designation, setDesignation] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [type, setType] = useState("Boisson alcoolisée");
  const [degree, setDegree] = useState(0);
  const [mergeHT, setMergeHT] = useState(0);
  const [priceTTC, setPriceTTC] = useState(0);

  //les handles
    //designation
  function handleDesignation(e) {
    setDesignation(e.target.value);
  }
    //quantity
  function handleQuantity(e) {
    setQuantity(parseInt(e.target.value));
  }
    //buyprice
  function handleBuyPrice(e) {
    setBuyPrice(e.target.value);
  }
    //sellprice
  function handleSellPrice(e) {
    setSellPrice(e.target.value);
  }
    //type
  function handleType(e) {
    setType(e.target.value)
  }
    //degré
  function handleDegree(e) {
    setDegree(e.target.value);
  }
  
  //Affichage conditionnel du input de degré
  function showDegree(type) {
    if (type === "Boisson alcoolisée") {
      return (
        <div className="input-element" id="tohide">
          <label htmlFor="degree">Degré d'alcool : </label>
          <span><input type="number" name="degree" id="degree" onInput={(e) => handleDegree(e)} />% Vol</span>
        </div>
      )
    }
  }
  //Useeffect qui watch les prix de vente et d'achat, pour rendre la marge et le prix ttc
  useEffect(() => {
     setMergeHT(sellPrice - buyPrice);
     setPriceTTC(parseInt(sellPrice) + (parseInt(sellPrice) * 0.2));
  },[buyPrice,sellPrice])
  //Useeffect qui watch le type, et modifie la value de l'input degré
  useEffect(()=>{
    if (type !== "Boisson alcoolisée") {
      setDegree(0);
    }
  },[type,degree])

  function addProduct(){
    setProductsList([...productsList,{ 
      designation : designation,
      quantity : quantity,
      buyPrice : buyPrice,
      sellPrice : sellPrice,
      type : type,
      degree : degree,
      mergeHT : mergeHT,
      priceTTC : priceTTC
    }]);
  }

  useEffect(() => {
    console.log(productsList);
  },[productsList])


  return (
    <div className="formulaire-page">
      <div className="formulaire">
        <div className="input-element">
          <label htmlFor="designation">Désignation du produit :</label>
          <input type="text" name="designation" id="designation" onInput={(e) => handleDesignation(e)}/>
        </div>
        <div className="input-element">
          <label htmlFor="quantity">Quantité :</label>
          <span><input type="number" name="quantity" id="quantity" onInput={(e) => handleQuantity(e)}/>pcs</span>
        </div>
        <div className="input-element">
          <label htmlFor="buy-price">Prix d'achat HT :</label>
          <span><input type="number" name="buy-price" id="buy-price" step="0.1" onInput={(e) => handleBuyPrice(e)}/>€</span>
        </div>
        <div className="input-element">
          <label htmlFor="sell-price">Prix de vente HT :</label>
          <span><input type="number" name="sell-price" id="sell-price" step="0.1" onInput={(e) => handleSellPrice(e)} />€</span>
        </div>
        <div className="input-element">
          <label htmlFor="merge-ht">Marge HT : </label>
          <span><input value={mergeHT} type="number" name="merge-ht" id="merge-ht" disabled />€</span>
        </div>
        <div className="input-element">
          <label htmlFor="price-ttc">Prix de vente TTC : </label>
          <span><input value={priceTTC} type="number" name="price-ttc" id="price-ttc" disabled />€</span>
        </div>
        <div className="input-element">
          <label htmlFor="type">Type de produit :</label>
          <select name="type" id="type" onChange={(e) => handleType(e)} >
            <option value="Boisson alcoolisée">Boisson Alcoolisée</option>
            <option value="Boisson non-alcoolisée">Boisson non-alcoolisée</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        {showDegree(type)}
        <button onClick={() => addProduct()} >Ajouter !</button>
        
        

      </div>
    </div>
  );
}

export default Formulaire;
