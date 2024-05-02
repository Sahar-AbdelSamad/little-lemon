import React, {useEffect, useState} from 'react';
import {useFormValue} from '../custom-hooks/useFormValue.js';
import {fetchAPI} from '../api/api.js';

function BookingForm(props) {
  const reservationDate = useFormValue(Date.now());
  const reservationTime = useFormValue('');
  const reservationDiners = useFormValue('');
  const reservationOccasion = useFormValue('');
  const reservationSeating = useFormValue('');
  const [availableTimes, setAvailableTime] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(()=>{
    setAvailableTime(fetchAPI(reservationDate.value));
  },[reservationDate.value])

  useEffect(()=>{
    if(reservationDate.value && reservationDiners.value && reservationTime.value !== '') {
      setDisableSubmit(false);
    }
  },[reservationTime.value,reservationDate.value,reservationDiners.value])

  return (
    <form className='Karla' data-testid="form" onSubmit={props.submitForm}>
      <div className='d-flex'>
        <label className='mt-5 d-flex flex-column w-50'><span className='ps-1 label-reservation'>Date - <i>Required</i></span>
          <input {...reservationDate} name='Reservation Date' className='rounded border-0 p-2 mb-4 me-3 date-selection' type='date' placeholder='Choose Date' aria-label="Choose Date" required/>
        </label>
        <label className='mt-5 d-flex flex-column w-50'><span className='ps-1 label-reservation'>Time - <i>Required</i></span>
          <select {...reservationTime} name='Reservation Time' className='rounded border-0 p-2 mb-4' aria-label="Choose Time" required>
            <option value="" disabled>Choose Time</option>
            {(availableTimes).map(avTime => (
                <option key={avTime} value={avTime}>{avTime}</option>
              ))}
          </select>
        </label>
      </div>
      <label className='d-flex flex-column'><span className='ps-1 label-reservation'>Number of Diners - <i>Required</i></span>
        <select {...reservationDiners} className='d-block rounded border-0 p-2 w-100' name="Number Of Diners" aria-label="Choose number of diners" required>
          <option value="" disabled>Number of Diners</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="6">6 People</option>
          <option value="7">7 People</option>
          <option value="8">8+ People</option>
        </select>
      </label>
      <label className='d-flex flex-column mt-4'><span className='ps-1 label-reservation'>Occasion - <i>Optional</i></span>
        <select {...reservationOccasion} className='d-block rounded border-0 p-2 mb-4 w-100' name="Occasion" aria-label="Choose the Occasion">
          <option value="" disabled>Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        </label>
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
      {props.reservePressed ?
        <div className='d-flex flex-column flex-md-row justify-content-between'>
          <input data-testid="submitButton" disabled={disableSubmit} aria-label="On Click" className={`order-md-2 mt-4 py-2 bton font-large ${disableSubmit ? 'btn-disabled' : ''}`} type="submit" value="Make Your reservation"/>
          <button className='bton mt-4 py-2' onClick={props.showBookings}>Cancel</button>
        </div> :
        <input data-testid="submitButton" aria-label="On Click" className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>}
    </form>
  );
}

export default BookingForm;