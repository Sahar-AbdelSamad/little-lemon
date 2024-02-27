import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({isOpen, handleToggle}) {
  const links = [
    {
      id:1,
      path: '/',
      text: 'Home'
    },
    {
      id:2,
      path: '/about',
      text: 'About'
    },
    {
      id:3,
      path: '/menu',
      text: 'Menu'
    },
    {
      id:4,
      path: '/reservation',
      text: 'Reservation'
    },
    {
      id:5,
      path: '/orderonline',
      text: 'Order Online'
    },
    {
      id:6,
      path: '/login',
      text: 'Login'
    }
  ]
  return (
    <nav className='navigation'>
      {isOpen ? <img onClick={handleToggle} className='closebtn' src={require('../assets/icons_assets/closeicon.png')} alt='close icon'/> : ''}
      <ul>
        {links.map((link=>(
          <li key={link.id}><NavLink to={link.path} onClick={handleToggle}>{link.text}</NavLink></li>
        )))}
      </ul>
    </nav>
  );
}

export default Nav;