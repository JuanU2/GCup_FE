// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from "../hooks/auth";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
