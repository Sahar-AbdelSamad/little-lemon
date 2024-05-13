import React from 'react';
import hero from '../assets/icons_assets/restauranfood.jpg';
import Bookings from './Bookings';
import { useSelector, useDispatch } from 'react-redux';
import { pressReservationBtnOnHomepage } from '../redux/booking/bookingSlice';

function Hero() {
  const dispatch = useDispatch();
  const reservePressed = useSelector(state => state.booking.reserveButtonPressed);
  return (
    <section className='hero'>
      <div className='hero-section'>
        {reservePressed ? <Bookings/> : <>
            <h1 className='hero-title pt-md-3'>Little Lemon</h1>
            <h3 className='location'>Chicago</h3>
            <div className='hero-description d-flex'>
              <p className='description Karla f-medium clr-white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
              <img className='img-hero img' src={hero} alt='Food'/>
            </div>
            <button aria-label="On Click" className='bton' onClick={() => dispatch(pressReservationBtnOnHomepage())}>Reserve a table</button>
        </>}
        </div>
    </section>
  );
}

export default Hero;