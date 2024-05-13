import React from 'react';
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { switchBookingConfirmation } from '../redux/booking/bookingSlice';


function ConfirmedBookingPage(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className='text-center pt-4 pb-2 clr-yellow'>Booking confirmed successfully</h2>
      <div className='clr-white d-flex justify-content-around'>
        <ul className='list-unstyled'>
          <li className='h3'>Little Lemon <button className='cancel-booking' onClick={(()=>dispatch(switchBookingConfirmation()))}>Cancel Booking</button></li>
          <li className='mt-1 position-relative'><GoCalendar /> {props.formData['Reservation Date']} <button className='cancel-booking position-absolute end-0' onClick={(()=>dispatch(switchBookingConfirmation()))}>Edit Booking</button></li>
          <li className='mt-1'><LuClock3 /> {props.formData['Reservation Time']} {props.formData['Occasion'] &&  <i>{props.formData['Occasion']}</i> }</li>
          <li className='mt-1'><MdOutlinePersonOutline /> {props.formData['Number Of Diners']} People {props.formData['Seating Options']? `(${props.formData['Seating Options']} seating)` : ''}</li>
          <li className='mt-1'><CiLocationOn /> 5800, California, United States 92133</li>
        </ul>

      </div>
          <button className='d-block mx-auto bton mt-4 py-2' onClick={(()=>dispatch(switchBookingConfirmation()))}>Done</button>
      </div>
  );
}

export default ConfirmedBookingPage;