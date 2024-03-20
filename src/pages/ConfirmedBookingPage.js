import React from 'react';

function ConfirmedBookingPage(props) {
  return (
    <div className='text-center pt-4 clr-yellow h2'>
      Booking confirmed successfully
      <button className='d-block mx-auto bton mt-4 py-2' onClick={(()=>props.setBookingConfirmed(!props.bookingConfirmed))}>Back</button></div>
  );
}

export default ConfirmedBookingPage;