import React from 'react'
import Logotipo from "../../assets/images/Logotipo/logo.jpg";
import '../../assets/sass/navbar.scss'
const NavBar = () => {
    return (
        <nav className="navbar nav-logo navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <img
              className="img-fluid col-2"
              src={Logotipo}
              alt="logotipo de la empresa"
            />
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse  navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="#">
                    Bienvenidos ...
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    Métodos de Pago
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" to="#">
                        Accesorios
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        Ropa Blanca
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        Decoración
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="#">
                        Regalos
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar Productos"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
    )
}

export default NavBar
