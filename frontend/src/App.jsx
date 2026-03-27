import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components 
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar';

import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const { user, dispatch } = useAuthContext();
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
                element={<Home />} />
              <Route
                path="/login"
                element={<Login />} />
              <Route
                path="/signup"
                element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
