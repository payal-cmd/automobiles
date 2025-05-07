import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo text-3d">AutoShop</div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'active' : ''}>Cart</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
