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
              <img className='img-hero img' src='images/restauranfood.jpg' alt='Food image'/>
            </div>
            <button className='btn'>Reserve a table</button>
          </div>
        </section>

        <section className='highlights'>
          <div className='hide-mobile foods-specials'>
            <h2>This Week's Specials!</h2>
            <button className='btn order-btn'>Order Online</button>
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
              <img className='img img-specials' src='./images/greek salad.jpg' alt='Greek salad image'/>
              <div className='card-title-desktop'>
                <p className='food-title'>Greek Salad</p>
                <p className='hide-mobile price-desktop'>$12.99</p>
              </div>
              <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
              <p className='price-mobile hide-desktop'>$12.99</p>
              <p className='hide-mobile delivery'>Order a delivery</p>
            </div>
            <div>
              <img className='img img-specials' src='./images/bruchetta.svg' alt='Bruchetta image'/>
              <div className='card-title-desktop'>
                <p className='food-title'>Brushetta</p>
                <p className='hide-mobile price-desktop'>$7.99</p>
              </div>
              <p className='specials-description'>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.</p>
              <p className='price-mobile hide-desktop'>$7.99</p>
              <p className='hide-mobile delivery'>Order a delivery</p>
            </div>
            <div>
              <img className='img img-specials' src='./images/lemon dessert.jpg' alt='Greek salad image'/>
              <div className='card-title-desktop'>
                <p className='food-title'>Lemon Dessert</p>
                <p className='hide-mobile price-desktop'>$5.00</p>
              </div>
              <p className='specials-description'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p className='price-mobile hide-desktop'>$5.00</p>
              <p className='hide-mobile delivery'>Order a delivery</p>
            </div>
            <div>
              <img className='img img-specials' src='./images/greek salad.jpg' alt='Greek salad image'/>
              <div className='card-title-desktop'>
                <p className='food-title'>Greek Salad</p>
                <p className='hide-mobile price-desktop'>$12.99</p>
              </div>
              <p className='specials-description'>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
              <p className='price-mobile hide-desktop'>$12.99</p>
              <p className='hide-mobile delivery'>Order a delivery</p>
            </div>
            <div>
              <img className='img img-specials' src='./images/greek salad.jpg' alt='Greek salad image'/>
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
        <section className='testimonials'></section>
        <section className='about'></section>
      </main>
    );
  }

  export default Main;
