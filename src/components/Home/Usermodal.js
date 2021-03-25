import React from "react";
// import {Link} from 'react-router-dom'




const Usermodal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign In
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="form-check m-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Recordarme
            </label>
          </div>
          
          <div className="alert alert-info" role="alert">
            Si no esta registrado{" "}
            
            <a href='/register' className="alert-link" >
              Ingrese acá
            </a>
            
          </div>
          
          <div className="modal-footer">
            <a href='/'>
            <button type="button" className="btn btn-primary">
              Ingresar  <i className="fas fa-sign-in-alt"></i>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usermodal;
