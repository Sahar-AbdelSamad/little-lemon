import React from 'react';
import hero from '../assets/icons_assets/restauranfood.jpg';
import Bookings from './Bookings';

function Hero(props) {
  return (
    <section className='hero'>
      <div className='hero-section'>
        {props.reservePressed ? <Bookings formData={props.formData} setBookingConfirmed={props.setBookingConfirmed} reservePressed={props.reservePressed} showBookings={props.showBookings} bookingConfirmed={props.bookingConfirmed} formData={props.formData} submitForm={props.submitForm}/> : <>
            <h1 className='hero-title pt-md-3'>Little Lemon</h1>
            <h3 className='location'>Chicago</h3>
            <div className='hero-description d-flex'>
              <p className='description Karla f-medium clr-white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
              <img className='img-hero img' src={hero} alt='Food'/>
            </div>
            <button aria-label="On Click" className='bton' onClick={props.showBookings}>Reserve a table</button>
        </>}
        </div>
    </section>
  );
}

export default Hero;