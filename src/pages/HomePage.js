import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';
import './homePage.css';

function Main(props) {
  return (
    <main>
      <Hero formData={props.formData} submitForm={props.submitForm} reservePressed={props.reservePressed} showBookings={props.showBookings}/>
      <Highlights/>
      <CustomersSay/>
      <Chicago/>
    </main>
  );
}

export default Main;
