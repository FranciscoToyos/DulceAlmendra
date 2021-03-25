import React from "react";
import "../../assets/sass/nav.scss";

import Usermodal from "./Usermodal";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav container w-75">
      <NavLink to="/contact" className="nav-link">
        <i className="fas fa-2x fa-phone-alt text-light"></i>
      </NavLink>
      <NavLink to="/carrito" className="nav-link">
        {" "}
        <i className="fas fa-2x fa-shopping-cart text-light"></i>
      </NavLink>
      <NavLink
        to="/user"
        className="btn btn-transparent"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {" "}
        <i className="fas fa-2x fa-user text-light "></i>
      </NavLink>

      <Usermodal />
    </nav>
  );
};

export default Nav;
