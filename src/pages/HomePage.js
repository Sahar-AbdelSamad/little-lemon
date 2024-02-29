import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';
import './homePage.css';

function Main(props) {
  return (
    <main>
      <Hero availableTimes={props.availableTimes}
        submitForm={props.submitForm} formData={props.formData} onSubmit={props.onSubmit} reservePressed={props.reservePressed} showBookings={props.showBookings}/>
      <Highlights/>
      <CustomersSay/>
      <Chicago/>
    </main>
  );
}

export default Main;
