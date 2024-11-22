import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SellerNavbar } from "./Seller/SellerNavbar";
import { ClientNavbar } from "./Cliente/ClientNavbar";
import { NavbarContext } from "../context/NavbarProvider";


export const PublicNavbar = () => {
  const { rol } = useContext(NavbarContext);

  if (rol === "VENDEDOR") {
    return <SellerNavbar />;
  } else if (rol === "CLIENTE") {
    return <ClientNavbar />;
  }

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img className="bi me-2" width="40" height="32" src="/cart.png" alt="Cart" />
          <h1 className="fs-4">Marketplace Universitario</h1>
        </a>

        <div className="col-md-3 text-end">
          <NavLink to="/login">
            <button type="button" className="btn btn-outline-primary me-2">
              Iniciar sesión
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button type="button" className="btn btn-outline-primary me-2">
              Registrarme
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};
