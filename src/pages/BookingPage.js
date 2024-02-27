import React, {useState} from 'react';
import './bookingPage.css';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  const [resdate, setResdate] = useState(Date());
  const updateDate = (e) => {
    setResdate(e.target.value)
  }
  const [restime, setRestime] = useState();
  const updateTime = (e) => {
    setRestime(e.target.value);
  }

  const [resoccasion, setOccasion] = useState();
  const updateOccasion = (e) => {
    setOccasion(e.target.value);
  }

  const [resdiners, setDiners] = useState();
  const updateDiners = (e) => {
    setDiners(e.target.value);
  }

  const [resseat, setSeat] = useState();
  const updateSeat = (e) => {
    setSeat(e.target.value);
  }

  const [formData, setFormData] = useState ();
  const fillCustomerDetails = () => {
    const tableReservationForm = document.querySelector('.reservation-form');
    tableReservationForm.style.display = "none";
    const customerDetailsForm = document.querySelector('.details-form');
    customerDetailsForm.style.display = "block";
  }

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormData(Object.fromEntries(formData.entries()));
    fillCustomerDetails();
  }

  const consoleFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='hero booking-page'>
      <div className='hero-section'>
        <h1 className='hero-title'>Little Lemon</h1>
        <h3 className='location'>Chicago</h3>
        <h2 className='mt-5 mb-3 clr-white'>Find a table for any Occasion</h2>
        <div className='d-flex justify-content-between'>
          <img className='restaurant-img w-50 me-3' src={require('../assets/icons_assets/restaurant.jpg')} alt='Restaurant image'/>
          <img className='restaurant-img w-50 ms-3' src={require('../assets/icons_assets/restaurant chef B.jpg')} alt='Restaurant image'/>
        </div>
        <div className='details-form'>
          <form className='Karla' onSubmit={consoleFormData}>
            <input className='d-block mt-4 fs-6 py-2 bton w-100 font-large' type="submit" value="Make Your reservation"/>
          </form>
        </div>
        <div className='reservation-form'>
          <BookingForm updateDate={updateDate} updateDiners={updateDiners} updateOccasion={updateOccasion}
          updateSeat={updateSeat} updateTime={updateTime} resdate={resdate} restime={restime}
          resdiners={resdiners} resoccasion={resoccasion} resseat={resseat} submitForm={submitForm} formData={formData}/>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;