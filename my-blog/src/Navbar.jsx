import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Sam Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
          <Link to="/show">Show Blogs</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;