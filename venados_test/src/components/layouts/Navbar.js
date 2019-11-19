import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <Link className="navbar-brand ml-5" to="/"><img src={logo} alt="logo" style = {{ width: "60px" }}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span >
     <i className= "fast fa-bars" style={{color: '#fff'}}/>
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-black text-uppercase ml-5" to="/">Home&nbsp;<i className="fas fa-home"></i><span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-black text-uppercase ml-5" to="/statistics">Estadísticas&nbsp;<i className="fas fa-chart-line"></i></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-black text-uppercase ml-5" to="/players">Jugadores&nbsp;<i className="fas fa-futbol"></i></Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;