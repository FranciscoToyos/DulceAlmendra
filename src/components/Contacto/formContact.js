import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function FormContact() {
  const [state, handleSubmit] = useForm("xeqvjarb");
  if (state.succeeded) {
    return <p className='m-5'>Gracias por contactarnos. A la brevedad le estaremos respondiendo!</p>;
  }
  return (
      <div>
      <div className='m-3 text-center'>
          <h2>Formulario de contacto</h2>
      </div>
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action='https://formspree.io/f/{form_id}'
      onSubmit={handleSubmit}
      method="post"
    >
     <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre y Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          
        />
      </div>
      <ValidationError 
        prefix="FirstName" 
        field="firstname"
        errors={state.errors}
      />
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          name='_replyto'
          placeholder="name@example.com"
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          id='message'
          name='message'
          placeholder='Deje su telefono para que lo contactemos por otro medio'
        ></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <input type="hidden" name="_subject" id="email-subject" value="Enviado por Dulce Almendra"/>
      <input type="submit" value="Enviar" className='btn btn-primary' disabled={state.submitting}/>
    </form>
    </div>
  );
}

export default FormContact;
