import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link> | <Link to="/listings">Listings</Link> | <Link to="/comments">Comments</Link>
    </nav>
  )
}

export default Navbar