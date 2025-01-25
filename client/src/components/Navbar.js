import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/symptoms">Symptoms</Link>
      <Link to="/medications">Medications</Link>
      <Link to="/appointments">Appointments</Link>
    </nav>
  );
};

export default Navbar;