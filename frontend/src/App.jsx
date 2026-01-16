import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const title = "Welcome to the new blog"
  return (
    <>
      <div className="App">
        <div className="content">
          <h1> App Component</h1>
        </div>
      </div>
    </>
  )
}

export default App
