import React ,{useState} from 'react';
import Nav from './Nav';
import './header_footer.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className='header screen-width'>
      <button className='hamburgerbtn' onClick={handleToggle}></button>
      {isOpen ? <div className='mobile-nav'><Nav isOpen={isOpen} handleToggle={handleToggle}/></div> : ''}
      <NavLink to='/'><div className='logo'/></NavLink>
      <button className='basket'></button>
      <div className='navbar'><Nav/></div>
    </header>
  );
}

export default Header;
