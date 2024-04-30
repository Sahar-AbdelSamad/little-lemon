import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import './header_footer.css';

function Header() {
  return (
    <header className='header screen-width'>
      <Nav />
      <NavLink to='/'><div className='logo'/></NavLink>
      <button className='basket'></button>
    </header>
  );
}

export default Header;
