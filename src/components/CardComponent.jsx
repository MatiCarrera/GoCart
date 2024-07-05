import { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles.css/CardComponent.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartContext } from "../context/CartContext";

export const CardComponent = ({
  image,
  title,
  description,
  price,
  id,
  handlerAdd,
  handlerRemove,
}) => {
  const { shoppingList } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const addProduct = () => {
    handlerAdd();
    setAdded(true);
  };
  const removeProduct = () => {
    handlerRemove();
    setAdded(false);
  };
  const checkAdded = () =>{
    const boolean = shoppingList.some(product => product.id == id)
    setAdded(boolean)
  }
  useEffect(() => {
    checkAdded()
  }, [])
  
  return (
    <div className="card">
      <img src={image} alt={title} className="cardImg" />
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
        <div className="ctrlCompra">
          <p className="cardPrice">${price}</p>
          {added ? (
            <button
              type="button"
              className="removeButton"
              onClick={removeProduct}
            >
              <DeleteForeverIcon color="inherit" />
              Quitar del carrito
            </button>
          ) : (
            <button type="button" className="addButton" onClick={addProduct}>
              <ShoppingCartIcon /> Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
