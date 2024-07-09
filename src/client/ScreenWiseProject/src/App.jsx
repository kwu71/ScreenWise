import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useEffect} from 'react';
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
          <Route path="/dashboard" element= {<Dashboard />}/>
          <Route path="/tips" element= {<Tips />}/>
          <Route path="/leaderboard" element= {<Leaderboard />}/>
          <Route path="/friends-all" element= {<FriendsAll />}/>
          <Route path="/friends-pending" element= {<FriendsPending />}/>
          <Route path="/friends-add" element= {<FriendsAdd />}/>
          <Route path="/profile" element= {<UserProfile />}/>
          <Route path="/edit-profile" element= {<EditUserProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
