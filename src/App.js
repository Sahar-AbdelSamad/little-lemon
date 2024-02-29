import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import MenuPage from './pages/MenuPage.js';
import BookingPage from './pages/BookingPage.js';
import OnlineOrderPage from './pages/OnlineOrderPage.js';
import LoginPage from './pages/LoginPage.js';
import Footer from './components/Footer.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // const [resdate, setResdate] = useState(Date());
  // const updateDate = (e) => {
  //   setResdate(e.target.value);
  //   updateTime(e.target.value);
  // }

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
    setReservePressed(!reservePressed);
  };

  const [reservePressed, setReservePressed] = useState(false);
  const showBookings = () => {
    setReservePressed(!reservePressed);
  }
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path="/" element={<HomePage submitForm={submitForm} formData={formData} onSubmit={consoleFormData} reservePressed={reservePressed} showBookings={showBookings} />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservation" element={<BookingPage submitForm={submitForm} formData={formData} onSubmit={consoleFormData} reservePressed={reservePressed} showBookings={showBookings} />}></Route>
        <Route path="/orderonline" element={<OnlineOrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
