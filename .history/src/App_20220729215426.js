import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Routes, Router, Route} from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
