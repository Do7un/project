import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes path='/' exact elements>
      </Router>
  
    </>
  );
}

export default App;
