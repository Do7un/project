import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';



function App() {
  return (
      <>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element />
        </Routes>
  </Router>
      </>
  );
}

export default App;
