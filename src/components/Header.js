import {NavLink} from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Victoria Blackburn</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink activeClassName= "active" to="/">Home</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  </nav>
  );
}

export default Header;