import React from 'react'
import FormContact from '../components/Contacto/formContact'
import SubFooterInfo from '../components/Contacto/subfooter'
const Contacto = () => {
    return (
        <React.Fragment>
        <div className='container'>
            <FormContact />
            <section className='mt-3'>
            <SubFooterInfo />

            </section>
        </div>
        </React.Fragment>
    )
}

export default Contacto
