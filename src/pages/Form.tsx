import React from 'react';
import { Link } from 'react-router-dom';

const FormPage = () => {
    return (
        <div>
            <h1>Form Page</h1>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/form">Form</Link>
        </div>
    );
};

export default FormPage;