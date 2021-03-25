import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const FormRegister = () => {
    const [provincias, setProvincias] = useState([]);
    // const [localidades, setLocalidades] = useState([])

    useEffect(() => {
      fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(resp => resp.json())
        .then(datos => {
          setProvincias(datos.provincias)
          console.log(datos.provincias)
        })
    }, [])

    // useEffect(() => {
    //   fetch('https://apis.datos.gob.ar/georef/api/localidades')
    //     .then(resp => resp.json())
    //     .then(datos => {
    //       setLocalidades(datos.localidades)
    //       // console.log(datos.localidades)
    //     })
    // }, [])

    return (
        
        <div className="card-body">
        <h5 className="card-title text-center text-light">
          Registro de Usuario
        </h5>
        <div className="card-text">
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="Cemail" className="form-label">
                Confirmar Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="Cemail"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="Provincia" className="form-label">
                Provincias
              </label>
              <select className="form-select" id="Provincia" name='provincias' required>
                <option selected disabled value="">Seleccionar Provincia</option>
                {
                  provincias.map((provincia) => (
                    <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                  ))
                }
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="Ciudad" className="form-label">
                Ciudad
              </label>
              <select className="form-select" id="Ciudad" required>
                <option selected disabled>
                  Choose...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="codigoP" className="form-label">
                Código Postal
              </label>
              <input
                type="text"
                className="form-control"
                id="codigoP"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Avatar</label>
              
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
              
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="Check"
                  required
                />

                <label className="form-check-label" htmlFor="Check">
                  <Link to="/información">
                    Aceptar términos y condiciones
                  </Link>
                </label>
              </div>
            </div>
            <div className="col-12">
              <Link to="/" className="btn btn-primary" type="submit">
                Registrarse
              </Link>
            </div>
          </form>
        </div>
      </div>
    
    )
}

export default FormRegister
