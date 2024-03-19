import React, {useEffect, useState} from 'react';
import {useFormValue} from '../custom-hooks/useFormValue.js';
import {fetchAPI} from '../api/api.js';
import ConfirmedBookingPage from '../pages/ConfirmedBookingPage.js';
function BookingForm(props) {
  const reservationDate = useFormValue(Date.now());
  const reservationTime = useFormValue('');
  const reservationDiners = useFormValue('');
  const reservationOccasion = useFormValue('');
  const reservationSeating = useFormValue('');
  const [availableTimes, setAvailableTime] = useState([]);

  useEffect(()=>{
    setAvailableTime(fetchAPI(reservationDate.value));
    console.log(reservationDate.value)
  },[reservationDate.value])

  if(props.bookingConfirmed) {
    return ( <ConfirmedBookingPage/>)
  } else {
  return (
    <form className='Karla' data-testid="form" onSubmit={props.submitForm}>
      <div className='d-flex'>
        <input {...reservationDate} name='Reservation Date' className='w-50 rounded border-0 p-2 mt-5 mb-4 me-3' type='date' placeholder='Choose Date' aria-label="Choose Date" required/>
        <select {...reservationTime} name='Reservation Time' className='w-50 rounded border-0 p-2 mt-5 mb-4' aria-label="Choose Time" required>
          <option value="">Choose Time</option>
          {(availableTimes).map(avTime => (
              <option key={avTime} value={avTime}>{avTime}</option>
            ))}
        </select>
      </div>
      <select {...reservationDiners} className='d-block rounded border-0 p-2 w-100' name="Number Of Diners" aria-label="Choose number of diners" required>
        <option value="">Number of Diners</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <select {...reservationOccasion} className='d-block rounded border-0 p-2 my-4 w-100' name="Occasion" aria-label="Choose the Occasion">
        <option value="">Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <fieldset {...reservationSeating} id="Seating Options" className='clr-white d-md-flex justify-content-between seating-option' required>
        <div className='fw-bold fs-5 gap-5 mb-2'>Seating Options</div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor='seating-standard'>Standard</label>
          <input className='order-md-1' id='seating-standard' type="radio" value="Standard" name="Seating Options"/>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor='seating-outside'>Outside</label>
          <input className='order-md-1' id='seating-outside' type="radio" value="Outside" name="Seating Options"/>
        </div>
      </fieldset>
      <div>{true}</div>
      <input id='clk' className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>
    </form>
  );
  }
}

export default BookingForm;