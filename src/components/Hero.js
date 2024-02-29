import React from 'react';
import hero from '../assets/icons_assets/restauranfood.jpg';
import Bookings from './Bookings';

function Hero(props) {
  return (
    <section className='hero'>
        {props.reservePressed ? <Bookings availableTimes={props.availableTimes}
        submitForm={props.submitForm} formData={props.formData} onSubmit={props.onSubmit} reservePressed={props.reservePressed}/> : <>
          <div className='hero-section'>
            <h1 className='hero-title'>Little Lemon</h1>
            <h3 className='location'>Chicago</h3>
            <div className='hero-description d-flex'>
              <p className='description Karla f-medium clr-white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
              <img className='img-hero img' src={hero} alt='Food image'/>
            </div>
            <button className='bton' onClick={props.showBookings}>Reserve a table</button>
          </div>
        </>}
    </section>
  );
}

export default Hero;