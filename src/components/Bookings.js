import React from 'react';
import BookingForm from '../components/BookingForm';
import ConfirmedBookingPage from '../pages/ConfirmedBookingPage.js';
import { useSelector } from 'react-redux';

function Bookings() {
  const bookingConfirmed = useSelector(state => state.booking.bookingConfirmed);

  if(bookingConfirmed) {
    return ( <ConfirmedBookingPage/>)
  } else {
  return (
    <>
      <div className='reservation-form pb-4'>
        <BookingForm/>
      </div>
    </>
  );
  }
}

export default Bookings;