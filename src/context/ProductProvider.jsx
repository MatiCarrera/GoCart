import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext"
import Swal from "sweetalert2";


export const ProductProvider = ({children}) => {
  
const [products, setProducts] = useState([]);
const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al cargar el producto",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
