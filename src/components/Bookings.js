import React from 'react';
import BookingForm from '../components/BookingForm';

function Bookings(props) {
  return (
    <>
      <div className='reservation-form pb-4'>
        <BookingForm bookingConfirmed={props.bookingConfirmed} submitForm={props.submitForm} formData={props.formData}/>
      </div>
    </>
  );
}

export default Bookings;