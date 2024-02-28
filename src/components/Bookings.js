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
        <BookingForm updateDate={props.updateDate} updateDiners={props.updateDiners} updateOccasion={props.updateOccasion}
        updateSeat={props.updateSeat} updateTime={props.updateTime} resdate={props.resdate} availableTimes={props.availableTimes}
        resdiners={props.resdiners} resoccasion={props.resoccasion} resseat={props.resseat} submitForm={props.submitForm} formData={props.formData}/>
      </div>
    </>
  );
}

export default Bookings;