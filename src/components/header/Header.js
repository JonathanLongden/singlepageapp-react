import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/"> <img src="logo.svg" width="30" height="30" className="d-inline-block align-top mr-1" alt="logo" /> BRAND</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact activeClassName="activeNav" className="nav-link" to="/">Home<span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="activeNav" className="nav-link" to="/features">Features</NavLink>
      </li>
      <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuNavLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuNavLink">
          <NavLink activeClassName="activeNav" className="dropdown-item" to="/admin">Admin</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Header;