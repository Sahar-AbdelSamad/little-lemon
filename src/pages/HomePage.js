import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';
import './homePage.css';

function Main() {
  return (
    <main>
      <Hero/>
      <Highlights/>
      <CustomersSay/>
      <Chicago/>
    </main>
  );
}

export default Main;
