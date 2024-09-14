import React from 'react';
import { Navigate } from 'react-router-dom';
import useUserStore from '../../stores/userStore';

function ProtectedRoute({ children }) {
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100vh]">
        <div className="w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <svg class="animate-spin h-20 w-20 mr-3 " viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return user !== null ? children : <Navigate to="/login" />
}

export default ProtectedRoute;