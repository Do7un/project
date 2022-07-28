import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Routes, Router, Route} from 'react-router-dom'
import { link } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element />
        </Routes>
      </Router>
    </>
  );
}

export default App;
