import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Tips from './pages/tips/tipsPage';
import Leaderboard from './pages/leaderboard/leaderboard';
import Friends from './pages/friends/friends';

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
          <Route path="/friends" element= {<Friends />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
