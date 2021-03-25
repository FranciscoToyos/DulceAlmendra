import React from "react";

import "../../assets/sass/subfooter.scss";

const subfooter = () => {
  return (
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i className="fab fa-2x fa-whatsapp text-success"> <strong className='w-text'>Whatsapp</strong></i>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Si usted se quiere comunicar mediante este medio haz click aquí: </strong><a href='https://api.whatsapp.com/send?phone=543413124473&text=Hola%2C'>3413124473</a>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i className="fab fa-2x i-text fa-instagram"> <strong>Instagram</strong></i> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Si quiere contactarse mediante Instagram haga click aquí: </strong> <a href='https://instagram.com/dulcealmendra.ss'>dulcealmendra.ss</a>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <i className="fab fa-2x f-text fa-facebook-square"> <strong>Facebook</strong></i>
        
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Si quiere contactarse mediante Facebook haga click aquí:</strong> <a href='https://facebook.com/dulcealmedra.ss'>dulcealmendra.ss</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default subfooter;
