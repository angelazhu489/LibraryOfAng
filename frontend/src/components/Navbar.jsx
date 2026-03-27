import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const logout = useLogout();

  // logout button
  const handleClick = () => {
    logout();
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="text-3xl inline hover:text-amber-600">Library of Ang</h1>
        </Link>
        <nav className="space-x-3">
          <Link className="hover:cursor-pointer hover:text-amber-600" to="/about">About</Link>
          <Link className="hover:cursor-pointer hover:text-amber-600" to="/login">Login</Link>
          <Link className="hover:cursor-pointer hover:text-amber-600" to="/signup">Signup</Link>
          <button onClick={handleClick} className="hover:cursor-pointer hover:text-amber-600">Logout</button>
        </nav>
      </div>
    </header>
  )
};

export default Navbar;