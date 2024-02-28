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
  const [resdate, setResdate] = useState(Date());
  const updateDate = (e) => {
    setResdate(e.target.value);
    updateTime(e.target.value);
  }

  const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const availableTimeReducer = (availableTimes=initialAvailableTimes, action) => {
    if(action.type==='update time') {
      return availableTimes;
    }
    if(action.type==='initialize time') {
      return availableTimes;
    }
  }
  const updateTime = (resdate) => {
    dispatch (
    {
      type: 'update time',
      date: resdate,
    });
  }

  const initializeTimes = () => {
    dispatch (
      {
        type: 'initialize time',
      });
  }
  const [availableTimes, dispatch] = useReducer (availableTimeReducer, initialAvailableTimes);

  useEffect(()=>{
    initializeTimes();
  },[])

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
        <Route path="/" element={<HomePage updateDate={updateDate} updateDiners={updateDiners} updateOccasion={updateOccasion}
        updateSeat={updateSeat} updateTime={updateTime} resdate={resdate} availableTimes={availableTimes}
        resdiners={resdiners} resoccasion={resoccasion} resseat={resseat} submitForm={submitForm} formData={formData} onSubmit={consoleFormData} reservePressed={reservePressed} showBookings={showBookings} />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservation" element={<BookingPage updateDate={updateDate} updateDiners={updateDiners} updateOccasion={updateOccasion}
        updateSeat={updateSeat} updateTime={updateTime} resdate={resdate} availableTimes={availableTimes}
        resdiners={resdiners} resoccasion={resoccasion} resseat={resseat} submitForm={submitForm} formData={formData} onSubmit={consoleFormData} reservePressed={reservePressed} showBookings={showBookings} />}></Route>
        <Route path="/orderonline" element={<OnlineOrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
