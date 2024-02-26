import React from 'react';
import { NavLink } from 'react-router-dom';
import './header_footer.css';
import Nav from './Nav';

function Footer() {
  return (
    <footer className='footer screen-width'>
      <NavLink to='/'><div className='footer-logo'/></NavLink>
      <div className='footer-links'>
      <div>Doormat Navigation
        <Nav />
      </div>
      <div>Contacts
        <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>Phone number</a></li>
          <li><a href='#'>Email</a></li>
        </ul>
      </div>
      <div>Social media links
      <ul>
          <li><a href='#'>Address</a></li>
          <li><a href='#'>Phone number</a></li>
          <li><a href='#'>Email</a></li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
