import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Leaderboard from './pages/leaderboard/leaderboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element= {<LandingPage />}/>
          <Route path="/login" element= {<Login />}/>
          <Route path="/dashboard" element= {<Dashboard />}/>
          <Route path="/leaderboard" element= {<Leaderboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
