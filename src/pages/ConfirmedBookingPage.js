import React from 'react';
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { switchBookingConfirmation, clearForm } from '../redux/booking/bookingSlice';


function ConfirmedBookingPage() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.booking.formData);
  const handleCancelBooking = () => {
    const isConfirmed = window.confirm('Are you sure you want to cancel this booking?');
    if (isConfirmed) {
      dispatch(clearForm());
    }
  };
  return (
    <div>
      <h2 className='text-center pt-4 pb-2 clr-yellow'>Hi {formData['Full Name']}, your booking is confirmed</h2>
      <div className='clr-white d-flex justify-content-around'>
        <ul className='list-unstyled'>
          <li className='h3'>Little Lemon <button className='cancel-booking' onClick={handleCancelBooking}>Cancel Booking</button></li>
          <li className='mt-1 position-relative'><GoCalendar /> {formData['Reservation Date']} <button className='cancel-booking position-absolute end-0' onClick={(()=>dispatch(switchBookingConfirmation()))}>Edit Booking</button></li>
          <li className='mt-1'><LuClock3 /> {formData['Reservation Time']} {formData['Occasion'] &&  <i>{formData['Occasion']}</i> }</li>
          <li className='mt-1'><MdOutlinePersonOutline /> {formData['Number Of Diners']} People {formData['Seating Options']? `(${formData['Seating Options']} seating)` : ''}</li>
          <li className='mt-1'><CiLocationOn /> 5800, California, United States 92133</li>
        </ul>

      </div>
          <button className='d-block mx-auto bton mt-4 py-2' onClick={(()=>dispatch(clearForm()))}>Done</button>
      </div>
  );
}

export default ConfirmedBookingPage;