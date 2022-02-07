import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const PrivateLink = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { loading, isAuthenticated } = authContext;

  //return !isAuthenticated && !loading ? (
  return !isAuthenticated && !loading ? <Navigate to='/login' /> : <Home />;
};

export default PrivateLink;
