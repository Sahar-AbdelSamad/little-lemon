import React from 'react';
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
import ConfirmedBookingPage from './pages/ConfirmedBookingPage.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/reservation" element={<BookingPage/>}></Route>
        <Route path="/orderonline" element={<OnlineOrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBookingPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
