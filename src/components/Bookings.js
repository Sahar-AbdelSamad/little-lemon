import React from 'react';
import BookingForm from '../components/BookingForm';
import ConfirmedBookingPage from '../pages/ConfirmedBookingPage.js';
import { useSelector } from 'react-redux';

function Bookings(props) {
  const bookingConfirmed = useSelector(state => state.booking.bookingConfirmed);

  if(bookingConfirmed) {
    return ( <ConfirmedBookingPage formData={props.formData}/>)
  } else {
  return (
    <>
      <div className='reservation-form pb-4'>
        <BookingForm formData={props.formData} reservePressed={props.reservePressed} showBookings={props.showBookings} submitForm={props.submitForm}/>
      </div>
    </>
  );
  }
}

export default Bookings;