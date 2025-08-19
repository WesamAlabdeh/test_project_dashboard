import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../states/AuthState';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
}

export default ProtectedRoute;
