import React, { useState, useEffect } from "react";


import "../../assets/sass/card-prod.scss";


const Card = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3005/api/productos')
      .then(resp => resp.json())
      .then(datos => {
          setProducts(datos)
          
      })
  }, [])
  
  

  return (
    <>
    {
      products.map((producto) => {
        return (
          <div className="card col-12 my-1" key={producto._id}>
      <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
      <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">
          {producto.descripcion}
        </p>
        <h4>Precio: ${producto.precio}</h4>
        <a href="/" className="btn boton">
          Agregar a Carrito
        </a>
      </div>
    </div>
        )
      })
    }
    
    </>
  );
};

export default Card;

