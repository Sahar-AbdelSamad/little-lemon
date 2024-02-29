import React from 'react';
import BookingForm from '../components/BookingForm';

function Bookings(props) {
  return (
    <>
      <div className='details-form'>
        <form className='Karla' onSubmit={props.onSubmit}>
          <input className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>
        </form>
      </div>
      <div className='reservation-form pb-4'>
        <BookingForm availableTimes={props.availableTimes}
        submitForm={props.submitForm} formData={props.formData}/>
      </div>
    </>
  );
}

export default Bookings;