import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/form">Form</Link>
        </div>
    );
};

export default HomePage;