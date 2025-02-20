import React, { useContext } from 'react'
import { NavbarContext } from '../context/NavbarContext';
import { NavLink } from 'react-router-dom';


export const SellerNavbar = () => {

    const {setNavbarType} = useContext(NavbarContext);

  return (
    <div>
    <div class="px-3 py-2 text-bg-dark border-bottom">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <form
            class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            <input
              type="search"
              class="form-control"
              placeholder="Busca el producto que deseas comprar"
              aria-label="Search"
            />
          </form>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/productseller" className="nav-link white px-2">
                <button class="btn btn-dark">Mis productos</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/addproduct" className="nav-link px-2">
                <button class="btn btn-dark">Agregar producto</button>
                  
                </NavLink>
              </li>
              <li>
                <NavLink to="/deleteproduct" className="nav-link px-2">
                <button class="btn btn-dark">Eliminar producto</button>
                  
                </NavLink>
              </li>
              <li>
                <NavLink to="/editproduct" className="nav-link px-2">
                <button class="btn btn-dark">Modificar producto</button>
                  
                </NavLink>
              </li>
              
            </ul>
          </ul>

          <div className="dropdown text-end">
            <button
              className="btn btn-outline-danger"
              onClick={() => setNavbarType("public")}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
