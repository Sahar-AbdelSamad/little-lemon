import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';
import './homePage.css';

function Main(props) {
  return (
    <main>
      <Hero updateDate={props.updateDate} updateDiners={props.updateDiners} updateOccasion={props.updateOccasion}
        updateSeat={props.updateSeat} updateTime={props.updateTime} resdate={props.resdate} availableTimes={props.availableTimes}
        resdiners={props.resdiners} resoccasion={props.resoccasion} resseat={props.resseat} submitForm={props.submitForm} formData={props.formData} onSubmit={props.onSubmit} reservePressed={props.reservePressed} showBookings={props.showBookings}/>
      <Highlights/>
      <CustomersSay/>
      <Chicago/>
    </main>
  );
}

export default Main;
