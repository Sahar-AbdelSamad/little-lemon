  import React from 'react';
  import './main.css';

  function Main() {
    return (
      <main>
        <section className='hero'>
          <div className='hero-section'>
            <h1 className='hero-title'>Little Lemon</h1>
            <h3 className='location'>Chicago</h3>
            <div className='hero-description'>
              <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
              <img className='img-hero' src='images/restauranfood.jpg' alt='Food image'/>
            </div>
            <button className='btn'>Reserve a table</button>
          </div>
        </section>
        <section className='highlights'>
          <div className='hide-mobile foods-specials'>
            <h2>This Week's Specials!</h2>
            <button className='btn'>Order Online</button>
          </div>
          <div className='hide-desktop mobile-delivery'>
            <h2>Order for delivery!</h2>
            <div className='food-btns'>
              <button className='delivery-btn btn'>Lunch</button>
              <button className='delivery-btn btn'>Mains</button>
              <button className='delivery-btn btn'>Desserts</button>
              <button className='delivery-btn btn'>A La Carte</button>
              <button className='delivery-btn btn'>Specials</button>
            </div>
          </div>
          <div className='specials-cards'>
            <div>
              <img/>
              <div>
                <p className='food-title'>Bruchetta</p>
                <p className='price'>$12.99</p>
              </div>
              <p className='specials-description'>Food Description Food Description Food Description</p>
              <p className='hide-mobile'>Order a delivery<img /></p>
            </div>
          </div>
        </section>
        <section className='testimonials'></section>
        <section className='about'></section>
      </main>
    );
  }

  export default Main;
