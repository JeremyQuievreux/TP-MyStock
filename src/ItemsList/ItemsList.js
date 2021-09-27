import './ItemsList.scss';

function ItemsList({ productsList, setProductsList }) {
  return (
    <div className="ItemsList">
      {productsList.map((product, key)=> {
        return (
          <p key={key}>{product.designation}</p>
          )
        }   
      )}
    </div>
  );
}

export default ItemsList;
