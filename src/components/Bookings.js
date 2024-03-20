import React from 'react';
import BookingForm from '../components/BookingForm';
import ConfirmedBookingPage from '../pages/ConfirmedBookingPage.js';

function Bookings(props) {

  if(props.bookingConfirmed) {
    return ( <ConfirmedBookingPage setBookingConfirmed={props.setBookingConfirmed} bookingConfirmed={props.bookingConfirmed}/>)
  } else {
  return (
    <>
      <div className='reservation-form pb-4'>
        <BookingForm setBookingConfirmed={props.setBookingConfirmed} reservePressed={props.reservePressed} showBookings={props.showBookings} bookingConfirmed={props.bookingConfirmed} submitForm={props.submitForm} formData={props.formData}/>
      </div>
    </>
  );
  }
}

export default Bookings;