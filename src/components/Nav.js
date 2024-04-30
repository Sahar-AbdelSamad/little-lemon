import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
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
      <button className='hamburgerbtn' onClick={handleToggle}>
      {!isOpen ? <FiMenu /> : <div className='closebtn'><MdClose /></div>}</button>
      <ul className={`menu-nav ${isOpen ? 'show-menu' : '' }`}>
        {links.map((link=>(
          <li key={link.id}><NavLink to={link.path} onClick={() => setIsOpen(false)}>{link.text}</NavLink></li>
        )))}
      </ul>
    </nav>
  );
}

export default Nav;