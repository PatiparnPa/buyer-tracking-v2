import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps & RouteProps> = ({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}) => {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={authenticationPath} />;
  }
};

export default ProtectedRoute;