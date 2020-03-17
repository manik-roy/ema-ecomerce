import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-center bg-light py-3 mb-2">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Shop</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/review">Order Review</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Manage Inventory</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Manage Inventory</Link>
      </li>
    </ul>
  </header>
  );
};

export default Navbar;