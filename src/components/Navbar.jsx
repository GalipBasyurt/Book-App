import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/">
          <h2>Book App</h2>
        </Link>
      </div>
      <div className="your-favorites">
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
