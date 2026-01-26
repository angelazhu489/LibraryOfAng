import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components 
import Home from './pages/Home'
import BlogForm from './components/BlogForm'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const title = "Welcome to the new blog"
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Home />} />
              <Route path="/blogs/create" element={<BlogForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
