import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', backgroundColor: '#2c5e3f', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        AquaShop
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
