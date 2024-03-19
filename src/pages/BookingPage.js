import React from 'react';
import './bookingPage.css';
import Bookings from '../components/Bookings';

function BookingPage(props) {
  return (
    <div className='hero booking-page'>
      <div className='hero-section mw-50'>
        <h1 className='hero-title'>Little Lemon</h1>
        <h3 className='location'>Chicago</h3>
        <h2 className='mt-3 mb-3 clr-white'>Find a table for any Occasion</h2>
        <div className='d-flex justify-content-between'>
          <img className='restaurant-img w-50 pe-3' src={require('../assets/icons_assets/restaurant.jpg')} alt='Restaurant'/>
          <img className='restaurant-img w-50 ps-3' src={require('../assets/icons_assets/restaurant chef B.jpg')} alt="Restaurant's Chef"/>
        </div>
        <Bookings formData={props.formData} submitForm={props.submitForm}/>
      </div>
    </div>
  );
}

export default BookingPage;