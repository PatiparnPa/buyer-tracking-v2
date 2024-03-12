import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface AuthenticatedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  path: string;
  element: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  path,
  element,
}) => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken && window.location.pathname !== authenticationPath) {
      // Redirect to the login page if the user is not authenticated and not already on the login page
      window.location.href = authenticationPath;
    }
  }, [isAuthenticated, authenticationPath]);

  // Render the Route component if the user is authenticated, otherwise redirect to the login page
  return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to={authenticationPath} />;
};

export default AuthenticatedRoute;
