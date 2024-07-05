import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../styles.css/NavbarComponent.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const NavbarComponent = () => {
  const {shoppingList} = useContext(CartContext)
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          GoCart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" href="#">
                Mi carrito
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Encontra lo que buscas"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <NavLink to="/cart" className="cart">
            <Badge badgeContent={shoppingList.length} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
