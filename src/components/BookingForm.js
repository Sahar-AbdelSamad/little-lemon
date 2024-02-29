import React, {useEffect, useReducer,useState} from 'react';
import {useFormValue} from '../custom-hooks/useFormValue.js';
import availableTimeReducer from '../reducers/availableTimesReducer.js';

function BookingForm(props) {
  const reservationDate = useFormValue(Date.now());
  const reservationTime = useFormValue('');
  const reservationDiners = useFormValue('');
  const reservationOccasion = useFormValue('');
  const reservationSeating = useFormValue('');
  const [availableTimes, dispatch] = useReducer (availableTimeReducer, []);
  useEffect(()=>{
    dispatch({type:'initialize time'})
  },[])
  const [resdate, setResdate] = useState('');
  const updateDate = (e) => {
    setResdate(e.target.value);
    dispatch({type:'update time'})
  }
  return (
    <form className='Karla' onSubmit={props.submitForm}>
      <div className='d-flex'>
        <input value={resdate} onChange={updateDate} name='Reservation Date' className='w-50 rounded border-0 p-2 mt-5 mb-4 me-3' type='date' placeholder='Choose Date' aria-label="Choose Date"/>
        <select {...reservationTime} name='Reservation Time' className='w-50 rounded border-0 p-2 mt-5 mb-4' aria-label="Choose Time">
          <option>Choose Time</option>
          {availableTimes.map(availableTime => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>
      </div>
      <select {...reservationDiners} className='d-block rounded border-0 p-2 w-100' name="Number Of Diners" aria-label="Choose number of diners">
        <option>Number of Diners</option>
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
        <option>Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <fieldset {...reservationSeating} id="Seating Options" className='clr-white d-md-flex justify-content-between seating-option'>
        <div className='fw-bold fs-5 gap-5 mb-2'>Seating Options</div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor='seating-standard'>Standard</label>
          <input className='order-md-1' id='seating-standard' type="radio" value="Standard" name="Seating Options"/>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor=' Options-outside'>Outside</label>
          <input className='order-md-1' id='seating-outside' type="radio" value="Outside" name="Seating Options"/>
        </div>
      </fieldset>
      <input className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>
    </form>
  );
}

export default BookingForm;