import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let userIsAuthenticated = false; // Temporary set to true for demonstration purposes.

    return (
        userIsAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoutes;
