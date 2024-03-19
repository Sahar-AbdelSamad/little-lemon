import React, {useState} from 'react';
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
  const [formData, setFormData] = useState ();
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormData(Object.fromEntries(formData.entries()));
    const x = Object.fromEntries(formData.entries());
    console.log(x);
    if(x["Seating Options"] === undefined) {
      alert('Please select a Seating options');
    } else {
      console.log('Success');
      document.getElementById("clk").disabled = true;
    }
  }
  const [reservePressed, setReservePressed] = useState(false);
  const showBookings = () => {
    setReservePressed(!reservePressed);
  }
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path="/" element={<HomePage formData={formData} submitForm={submitForm} reservePressed={reservePressed} showBookings={showBookings}/>}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservation" element={<BookingPage formData={formData} submitForm={submitForm} reservePressed={reservePressed} showBookings={showBookings}/>}></Route>
        <Route path="/orderonline" element={<OnlineOrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBookingPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
