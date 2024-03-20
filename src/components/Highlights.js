import React from 'react';
import { NavLink } from 'react-router-dom';

function Highlights() {
  return (
    <section className='highlights screen-width'>
        <div className='hide-mobile foods-specials'>
          <h2>This Week's Specials!</h2>
          <button aria-label="On Click" className='bton order-btn'>
          <NavLink to='/orderonline'>Order Online</NavLink></button>
        </div>
        <div className='hide-desktop mobile-delivery'>
          <h2 className='mt-4'>Order for delivery!</h2>
          <div className='food-btns'>
            <button className='delivery-btn bton'>Lunch</button>
            <button className='delivery-btn bton'>Mains</button>
            <button className='delivery-btn bton'>Desserts</button>
            <button className='delivery-btn bton'>A La Carte</button>
            <button className='delivery-btn bton'>Specials</button>
          </div>
        </div>
        <div className='specials-cards'>
          <div>
            <img className='img img-specials' src={require('../assets/icons_assets/greek salad.jpg')} alt='Greek salad'/>
            <div className='card-title-desktop'>
              <p className='food-title'>Greek Salad</p>
              <p className='hide-mobile price-desktop'>$12.99</p>
            </div>
            <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
            <p className='price-mobile hide-desktop'>$12.99</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
          <div>
            <img className='img img-specials' src={require('../assets/icons_assets/bruchetta.svg')} alt='Bruchetta'/>
            <div className='card-title-desktop'>
              <p className='food-title'>Brushetta</p>
              <p className='hide-mobile price-desktop'>$7.99</p>
            </div>
            <p className='specials-description'>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.</p>
            <p className='price-mobile hide-desktop'>$7.99</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
          <div>
            <img className='img img-specials' src={require('../assets/icons_assets/lemon dessert.jpg')} alt='Greek salad'/>
            <div className='card-title-desktop'>
              <p className='food-title'>Lemon Dessert</p>
              <p className='hide-mobile price-desktop'>$5.00</p>
            </div>
            <p className='specials-description'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <p className='price-mobile hide-desktop'>$5.00</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
          <div>
            <img className='img img-specials' src={require('../assets/icons_assets/greek salad.jpg')} alt='Greek salad'/>
            <div className='card-title-desktop'>
              <p className='food-title'>Greek Salad</p>
              <p className='hide-mobile price-desktop'>$12.99</p>
            </div>
            <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
            <p className='price-mobile hide-desktop'>$12.99</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
          <div>
            <img className='img img-specials' src={require('../assets/icons_assets/greek salad.jpg')} alt='Greek salad'/>
            <div className='card-title-desktop'>
              <p className='food-title'>Greek Salad</p>
              <p className='hide-mobile price-desktop'>$12.99</p>
            </div>
            <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
            <p className='price-mobile hide-desktop'>$12.99</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
        </div>
      </section>
  );
}

export default Highlights;