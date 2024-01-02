import './App.css';
import React from 'react';
import Reservations from '../Components/Reservations/Reservations';
import { useState, useEffect } from 'react'

function App() {

  const [reservations, setReservations] = useState([])
  const [error, setError] = useState('')

  function getReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => setReservations([...reservations, ...data]))
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    getReservations()
  },[])
  
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='reservation-form'>
        <h2>Form Container</h2>
      </div>
      <div className='reservation-container'>
        <Reservations reservations={reservations} />  
      </div>
    </div>
  );
}

export default App; 