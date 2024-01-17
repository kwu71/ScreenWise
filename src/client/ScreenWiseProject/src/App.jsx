import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './pages/landingPage/hero'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Dashboard from './pages/dashboard/dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element= {<Hero />}/>
          <Route path="/login" element= {<Login />}/>
          <Route path="/register" element= {<Register />}/>
          <Route path="/dashboard" element= {<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
