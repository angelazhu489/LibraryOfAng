import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components 
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar';
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <div className="App min-h-screen bg-gray-900 text-gray-300 font-mono">
        <BrowserRouter>
          <div className="p-4">
            <Navbar />
          </div>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />} />
              <Route
                path="/about"
                element={<About />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />} />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
