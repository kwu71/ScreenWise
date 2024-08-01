import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import useUserStore from '../../stores/userStore';

function ProtectedRoute({ children }) {
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading); // Add isLoading to your Zustand store
  
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return user !== null ? children : <Navigate to="/login" />
}

export default ProtectedRoute;