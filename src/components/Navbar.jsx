import { NavLink } from "react-router-dom"; 

function Navbar() {
  return (
    <nav className="Navbar">
    <div className="navContent">
      <ul id="links">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/Comics">Comics</NavLink></li>
        <li><NavLink to="/Collection">Collections</NavLink></li>
        <li><NavLink to='/add-collection'>Add New Collection</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
      </ul></div>
    </nav>
  );
}


export default Navbar;
