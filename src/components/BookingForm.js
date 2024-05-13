import React, {useEffect, useState} from 'react';
import {fetchAPI} from '../api/api.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { submitFormSuccess, switchBookingConfirmation, clearForm } from '../redux/booking/bookingSlice';
import { submitAPI } from '../api/api.js';

function BookingForm() {
  const dispatch = useDispatch();
  const localState = useSelector(state => state.booking.formData);
  const reservePressed = useSelector(state => state.booking.reserveButtonPressed);

  const [formData, setFormData] = useState({
    "Reservation Time": '',
    "Number Of Diners": '',
    'Occasion': '',
    "Seating Options": '',
    'Reservation Date': '',
    'Full Name': '',
    'Email': '',
    'Tel': '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [nextProcess, setNextProcess] = useState(false);
  const goToNextProcess = () => {
    if(formData["Reservation Date"] && formData["Number Of Diners"] && formData["Reservation Time"] !== '') {
      setNextProcess(true);
    };
  }
  useEffect(()=>{
    setFormData(localState)
  },[])

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(submitFormSuccess(formData));
    console.log(formData)
    //dispatch(saveToLocalStorage(formData));
    if(submitAPI(formData)===true) {
      dispatch(switchBookingConfirmation());
    }
  };

  const [availableTimes, setAvailableTime] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    setAvailableTime(fetchAPI(formData["Reservation Date"]));
  },[formData["Reservation Date"]])

  const minDate = new Date(); // Today's date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2); // Two months in advance

  const handleDateChange = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const newDate = date.toLocaleDateString('en-US', options);
    setFormData({ ...formData, ['Reservation Date']: newDate })
    setIsOpen(false);
  };
  return (
    <form className='Karla' data-testid="form" onSubmit={handleSubmit}>
      <div className={!nextProcess ? 'd-block' : 'd-none'}>
        <div className='d-flex flex-sm-row flex-column'>
          <label className='mt-5 d-flex flex-column w-50'><span className='ps-1 label-reservation'>Date - <i>Required</i></span>
            <DatePicker className='rounded border-0 p-1 mb-4' aria-label="Select a date" name='Reservation Date'
                selected={formData["Reservation Date"]}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
                todayButton="Today"
                open={isOpen}
                onClickOutside={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
              />
          </label>
          <label className='mt-sm-5 flex-grow-1 d-flex flex-column'><span className='ps-1 label-reservation'>Time - <i>Required</i></span>
            <select value={formData["Reservation Time"]} onChange={handleChange} name='Reservation Time' className='rounded border-0 p-2 mb-4' aria-label="Select a time" required>
              <option value="" disabled>Select a time</option>
              {(availableTimes).map(avTime => (
                  <option key={avTime} value={avTime}>{avTime}</option>
                ))}
            </select>
          </label>
        </div>
        <label className='d-flex flex-column'><span className='ps-1 label-reservation'>Number of Diners - <i>Required</i></span>
          <select value={formData["Number Of Diners"]} onChange={handleChange} className='d-block rounded border-0 p-2 w-100' name="Number Of Diners" aria-label="Choose number of diners" required>
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
          <select value={formData["Occasion"]} onChange={handleChange} className='d-block rounded border-0 p-2 mb-4 w-100' name="Occasion" aria-label="Choose the Occasion">
            <option value="" disabled>Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          </label>
        <fieldset id="Seating Options" className='clr-white d-md-flex justify-content-between seating-option' required>
          <div className='fw-bold fs-5 gap-5 mb-2'>Seating Options</div>
          <div className='d-flex justify-content-between align-items-center'>
            <label className='order-md-2 ms-md-2' htmlFor='seating-standard'>Standard</label>
            <input className='order-md-1' id='seating-standard' type="radio" value="Standard" onChange={handleChange} checked={formData["Seating Options"] === 'Standard'} name="Seating Options"/>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <label className='order-md-2 ms-md-2' htmlFor='seating-outside'>Outside</label>
            <input className='order-md-1' id='seating-outside' type="radio" value="Outside" onChange={handleChange} checked={formData["Seating Options"] === 'Outside'} name="Seating Options"/>
          </div>
        </fieldset>
      </div>
      <div className={nextProcess ? 'next-input d-block pt-5' : 'd-none' }>
        <label className='d-flex flex-column '><span className='ps-1 label-reservation'>Full name - <i>Required</i></span>
          <input className='rounded border-0 p-1' placeholder='Enter your full name' type='text' name='Full Name' value={formData['Full Name']} onChange={handleChange} required/>
        </label>
        <label className='mt-3 d-flex flex-column'><span className='ps-1 label-reservation'>Email - <i>Required</i></span>
          <input className='rounded border-0 p-1' placeholder='Enter your email address' type='email' name='Email' value={formData['Email']} onChange={handleChange} required/>
        </label>
        <label className='mt-3 d-flex flex-column'><span className='ps-1 label-reservation'>Phone number - <i>Required</i></span>
          <input className='rounded border-0 p-1' placeholder='Enter your phone number' type='tel' name='Tel' value={formData['Tel']} onChange={handleChange} required/>
        </label>
      </div>
      {reservePressed ?
        <div className='d-flex flex-column flex-md-row justify-content-between'>
          <input data-testid="submitButton" aria-label="On Click" className={`order-md-2 mt-4 py-2 bton font-large ${!nextProcess ? 'd-none' : 'd-block'}`} type="submit" value="Make Your reservation"/>
          <button type='button' className={`order-md-2 mt-4 py-2 bton font-large ${nextProcess ? 'd-none' : 'd-block'}`} onClick={goToNextProcess}>Proceed to booking</button>
          <button className='bton mt-4 py-2' onClick={() => dispatch(clearForm())}>Cancel</button>
        </div> :
        <>
        <button type='button' className={`order-md-2 mt-4 py-2 px-3 bton font-large w-100 ${nextProcess ? 'd-none' : 'd-block'}`} onClick={goToNextProcess}>Proceed to booking</button>
        <input data-testid="submitButton" aria-label="On Click" className={`mt-4 fs-6 py-2 bton w-100 font-large ${!nextProcess ? 'd-none' : 'd-block'}`} type="submit" value="Make Your reservation"/></>}
    </form>
  );
}

export default BookingForm;