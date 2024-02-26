import React from 'react';
import Nav from './Nav';
import './header_footer.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header screen-width'>
      <button className='hamburgerbtn'></button>
      <NavLink to='/'><div className='logo'/></NavLink>
      <button className='basket'></button>
      <Nav/>
    </header>
  );
}

export default Header;
