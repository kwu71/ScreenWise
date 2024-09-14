import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, {useEffect} from 'react';
import ProtectedRoute from './component/core/ProtectedRoute';

import LandingPage from './pages/landingPage/landingPage'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Tips from './pages/tips/tipsPage';
import Leaderboard from './pages/leaderboard/leaderboard';
import FriendsAll from './pages/friends/friends';
import FriendsPending from './pages/friends/friendsPending'
import FriendsAdd from './pages/friends/friendsAdd';
import UserProfile from './pages/profile/userProfile';
import EditUserProfile from './pages/profile/editUserProfile';

// State
import useUserStore from './stores/userStore';

function App() {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element= {<LandingPage />}/>
          <Route path="/login" element= {<Login />}/>
          <Route 
            path="/dashboard" 
            element= {
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/tips" element= {
            <ProtectedRoute>
              <Tips />
            </ProtectedRoute>}/>
          <Route path="/leaderboard" element= {
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>}/>
          <Route path="/friends-all" element= {
            <ProtectedRoute>
              <FriendsAll />
            </ProtectedRoute>}/>
          <Route path="/friends-pending" element= {
            <ProtectedRoute>
              <FriendsPending />
            </ProtectedRoute>}/>
          <Route path="/friends-add" element= {
            <ProtectedRoute>
              <FriendsAdd />
            </ProtectedRoute>}/>
          <Route path="/profile" element= {
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>}/>
          <Route path="/edit-profile" element= {
            <ProtectedRoute>
              <EditUserProfile />
            </ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
