import React from 'react';
import { ContactForm } from '../components/form/ContactForm';
import { Link } from 'react-router-dom';
import './Form.scss'
const FormPage = () => {
    return (
        <div className='form-container'>
            <div className='row container' style={{ backgroundImage: "url('./img/iStock-1160028251 1.png')" }}>
                <div className='col-6'>
                    <h1>Foo Bar</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. </p>
                </div>


                <div className='col-6'>
                    <h3>Let us know what’s the plan and we will contact you as soon as posibble! </h3>
                    <ContactForm />
                </div>

            </div>
        </div>
    );
};

export default FormPage;