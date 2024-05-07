import React from 'react';
import restaurant from '../assets/icons_assets/restaurant chef B.jpg';
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

function ConfirmedBookingPage(props) {
  return (
    <div className='screen-width'>
      <h2 className='text-center pt-4 clr-yellow'>Booking confirmed successfully</h2>
      <div className='clr-white d-flex justify-content-around'>
        <img className='w-50' src={restaurant} alt='Restaurant image'/>
        <ul className='list-unstyled'>
          <li className='h3'>Little Lemon</li>
          <li className='mt-1'><GoCalendar /> {props.formData['Reservation Date']}</li>
          <li className='mt-1'><LuClock3 /> {props.formData['Reservation Time']} {props.formData['Occasion'] &&  <i>{props.formData['Occasion']}</i> }</li>
          <li className='mt-1'><MdOutlinePersonOutline /> {props.formData['Number Of Diners']} People {props.formData['Seating Options']? `(${props.formData['Seating Options']} seating)` : ''}</li>
          <li><CiLocationOn /> 5800, California, United States 92133</li>
        </ul>

      </div>
      <button className='d-block mx-auto bton mt-4 py-2' onClick={(()=>props.setBookingConfirmed(!props.bookingConfirmed))}>Back</button></div>
  );
}

export default ConfirmedBookingPage;