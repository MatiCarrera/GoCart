import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles.css/CartPages.css'
import Swal from "sweetalert2";

export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity} =
    useContext(CartContext);
  
  const calculateTotal = ()=>{
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  }

  const handlerPurchase=()=>{
    const produtsPurchased = shoppingList.map(product=>
      `${product.title} x ${product.quantity}`).join('\n')
      Swal.fire({
        icon: 'success',
        title: 'La compra se ha realizado con exito',
        html: `<p'> Has comprado: </p> <pre>${produtsPurchased}</pre>`
      })
    }


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {shoppingList.map((product) => (
            <tr key={product.id} className="align-middle">
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </button>
                <button className="btn btn-light">{product.quantity}</button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartDetails">
        <div className="cartP">
          <p>${calculateTotal()}</p>
        </div>
        <button className="btn btn-primary" type="button" onClick={handlerPurchase}>
          Comprar
        </button>
        <button className="btn btn-danger" type="button">
          Vaciar
        </button>
      </div>
    </>
  );
};
