import { NavLink } from "react-router-dom"; 

function Navbar() {
  return (
    <nav className="Navbar">
      <ul id="links">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Comics">Comics</NavLink></li>
        <li><NavLink to="/Collection">Collections</NavLink></li>
        <li><NavLink to='/add-collection'>Add New Collection</NavLink></li>
      </ul>
    </nav>
  );
}


export default Navbar;
