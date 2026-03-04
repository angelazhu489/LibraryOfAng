import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 class="text-3xl inline hover:text-amber-600">Library of Ang</h1>
        </Link>
      </div>
    </header>
  )
};

export default Navbar;