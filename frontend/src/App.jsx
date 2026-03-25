import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components 
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="App min-h-screen bg-gray-900 text-gray-300 font-mono">
        <BrowserRouter>
          <div className="p-4">
            <Navbar />
          </div>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
