import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <div className="container">
        <h2>InstaHash</h2>
        {/* <NavLink exact to="/">
          Hashtag Generator
        </NavLink>
        <NavLink exact to="/downloader">
          DP Downloader
        </NavLink> */}
      </div>
    </nav>
  );
}

export default Navbar;
