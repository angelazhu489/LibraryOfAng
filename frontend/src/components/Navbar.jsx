import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="text-3xl inline hover:text-amber-600">Library of Ang</h1>
        </Link>
        <nav>
          <div>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Navbar;