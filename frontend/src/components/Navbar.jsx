import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="text-3xl inline hover:text-amber-600">Library of Ang</h1>
        </Link>
        <ul>
          <li><Link to="/blogs">Blogs</Link></li>
          <li>Projects</li>
          <li>News</li>
          <li>About Ang</li>
        </ul>
      </div>
    </header>
  )
};

export default Navbar;