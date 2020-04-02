import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../icons/instahash.png';
function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="" />
        <p>
          <NavLink exact to="/" activeClassName="active">
            Hashtag Generator
          </NavLink>
          <NavLink exact to="/downloader" activeClassName="active">
            DP Downloader
          </NavLink>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
