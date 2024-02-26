import React from 'react';
import './bookingPage.css';

function BookingPage() {
  return (
    <div className='hero booking-page'>
      <div className='hero-section'>
        <h1 className='hero-title'>Little Lemon</h1>
        <h3 className='location'>Chicago</h3>
        <h2 className='mt-5 mb-3 clr-white'>Find a table for any Occasion</h2>
        <div className='d-flex justify-content-between'>
          <img className='restaurant-img w-50 me-3' src='images/restaurant.jpg' alt='Restaurant image'/>
          <img className='restaurant-img w-50 ms-3' src='images/restaurant chef B.jpg' alt='Restaurant image'/>
        </div>
        <form className='Karla'>
          <div className='d-flex'>
            <input className='w-50 rounded border-0 p-2 mt-5 mb-4 me-3' type='date' placeholder='Date'/>
            <input className='w-50 rounded border-0 p-2 mt-5 mb-4 ms-3' type='time' placeholder='Time'/>
          </div>
          <select className='d-block rounded border-0 p-2 w-100' name="NumberOfDiners">
            <option>Number of Diners</option>
            <option value="1-2">1-2</option>
            <option value="2-3">2-3</option>
          </select>
          <select className='d-block rounded border-0 p-2 my-4 w-100' name="Occasion">
            <option>Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <fieldset id="group1" className='clr-white d-md-flex justify-content-between'>
            <div className='fw-bold fs-5 gap-5 mb-2'>Seating Options</div>
            <div className='d-flex justify-content-between align-items-center'>
              <label className='order-md-2 ms-md-2' htmlFor='seating-standard'>Standard</label>
              <input className='order-md-1' id='seating-standard' type="radio" value="Standard" name="group1"/>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <label className='order-md-2 ms-md-2' htmlFor='seating-outside'>Outside</label>
              <input className='order-md-1' id='seating-outside' type="radio" value="Outside" name="group1"/>
            </div>
          </fieldset>
          <input className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="button" value="Let's go"/>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;