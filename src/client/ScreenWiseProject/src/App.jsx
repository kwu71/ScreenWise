import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Tips from './pages/tips/tipsPage';
import Leaderboard from './pages/leaderboard/leaderboard';
import FriendsAll from './pages/friends/friends';
import FriendsPending from './pages/friends/friendsPending'
import FriendsAdd from './pages/friends/friendsAdd';

function App() {

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
