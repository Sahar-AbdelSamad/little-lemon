import React from 'react';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-section'>
        <h1 className='hero-title'>Little Lemon</h1>
        <h3 className='location'>Chicago</h3>
        <div className='hero-description'>
          <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
          <img className='img-hero img' src='images/restauranfood.jpg' alt='Food image'/>
        </div>
        <button className='btn'><NavLink to='/reservation'>Reserve a table</NavLink></button>
      </div>
    </section>
  );
}

export default Hero;