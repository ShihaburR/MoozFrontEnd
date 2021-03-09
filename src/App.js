import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';


import HeroSection from './components/HeroSection/HeroSection';
import Join from './components/Join/join'
import Footer from './components/Footer'
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
