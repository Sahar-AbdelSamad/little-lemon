import React from 'react';
import AvailableTime from './AvailableTime';

function BookingForm(props) {
  return (
    <form className='Karla' onSubmit={props.submitForm}>
      <div className='d-flex'>
        <input value={props.resdate} onChange={props.updateDate} name='res-date' className='w-50 rounded border-0 p-2 mt-5 mb-4 me-3' type='date' placeholder='Choose Date'/>
        <AvailableTime restime={props.restime} updateTime={props.updateTime}/>
      </div>
      <select value={props.resdiners} onChange={props.updateDiners} className='d-block rounded border-0 p-2 w-100' name="NumberOfDiners">
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
      <select value={props.resoccasion} onChange={props.updateOccasion} className='d-block rounded border-0 p-2 my-4 w-100' name="Occasion">
        <option>Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <fieldset  value={props.resseat} onChange={props.updateSeat} id="Seating" className='clr-white d-md-flex justify-content-between seating-option'>
        <div className='fw-bold fs-5 gap-5 mb-2'>Seating Options</div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor='seating-standard'>Standard</label>
          <input className='order-md-1' id='seating-standard' type="radio" value="Standard" name="Seating"/>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <label className='order-md-2 ms-md-2' htmlFor='seating-outside'>Outside</label>
          <input className='order-md-1' id='seating-outside' type="radio" value="Outside" name="Seating"/>
        </div>
      </fieldset>
      <input className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>
    </form>
  );
}

export default BookingForm;