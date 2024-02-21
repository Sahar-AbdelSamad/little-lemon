import React from 'react';
import Nav from './Nav';
import './header_footer.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <NavLink to='/'><div className='logo'/></NavLink>
      <Nav/>
    </header>
  );
}

export default Header;
