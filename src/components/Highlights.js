import React from 'react';
import { NavLink } from 'react-router-dom';

function Highlights() {
  const specials = [
    {
      id: 1,
      title: 'Greek Salad',
      image: require('../assets/icons_assets/greek salad.jpg'),
      description: 'The famous Greek salad of crispy lettuce, peppers, olives, and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      priceDesktop: '$12.99',
      priceMobile: '$12.99',
    },
    {
      id: 2,
      title: 'Bruchetta',
      image: require('../assets/icons_assets/bruchetta.jpg'),
      description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
      priceDesktop: '$7.99',
      priceMobile: '$7.99',
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      image: require('../assets/icons_assets/lemon_dessert.jpg'),
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      priceDesktop: '$5.00',
      priceMobile: '$5.00',
    },
    {
      id: 4,
      title: 'Margherita Pizza',
      image: require('../assets/icons_assets/margherita_pizza.jpg'),
      description: 'Classic Italian pizza topped with tomato sauce, mozzarella cheese, fresh basil, and a drizzle of olive oil.',
      priceDesktop: '$14.99',
      priceMobile: '$14.99',
  },
  {
      id: 5,
      title: 'Spaghetti Carbonara',
      image: require('../assets/icons_assets/spaghetti_carbonara.jpg'),
      description: 'Authentic Italian pasta dish made with spaghetti, eggs, Pecorino Romano cheese, pancetta, and black pepper.',
      priceDesktop: '$10.99',
      priceMobile: '$10.99',
  },
  {
      id: 6,
      title: 'Tiramisu',
      image: require('../assets/icons_assets/tiramisu.jpg'),
      description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
      priceDesktop: '$8.99',
      priceMobile: '$8.99',
  }
  ];
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
        {specials.map(special => (
          <div key={special.id}>
            <img className='img img-specials' src={special.image} alt={special.title} />
            <div className='card-title-desktop'>
              <p className='food-title'>{special.title}</p>
              <p className='hide-mobile price-desktop'>{special.priceDesktop}</p>
            </div>
            <p className='specials-description'>{special.description}</p>
            <p className='price-mobile hide-desktop'>{special.priceMobile}</p>
            <p className='hide-mobile delivery'>Order a delivery</p>
          </div>
        ))}
  </div>
      </section>
  );
}

export default Highlights;