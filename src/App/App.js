import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Reservations from '../Components/Reservations/Reservations';
import Form from '../Components/Form/Form';

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

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation])
  }
  
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='reservation-form'>
        <Form addReservation={addReservation} />
      </div>
      <div className='reservation-container'>
        <Reservations reservations={reservations} />  
      </div>
    </div>
  );
}

export default App; 