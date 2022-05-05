import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
    const {user,isLoading}=useAuth();
    if(isLoading){
        return   <Spinner animation="border" variant="danger" />

    }
    return (
        user.email?<Outlet/>:<Navigate to='/login'/>
    );
};

export default PrivateRoute;