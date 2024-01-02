import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')

  function getResies() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => setReservations([...reservations, ...data]))
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    getResies()
  },[])
  
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <h2>Form Container</h2>
      </div>
      <div className='resy-container'>
        <h2>Reservation Card Container</h2>
      </div>
    </div>
  );
}

export default App; 