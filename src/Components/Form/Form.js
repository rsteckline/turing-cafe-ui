import { useState } from 'react'
import './Form.css'

const Form = ({addReservation}) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [number, setNumber] = useState('')

const enterReservation = (event) => {
  event.preventDefault()

  if (!name || !date || !time || !number) {
    alert('Please fill in all fields');
    return;
  }

  const newReservation = {
    id: Date.now(),
    name,
    date,
    time,
    number
  }
  addReservation(newReservation)
  clearInput()
}

const clearInput = () => {
  setName('')
  setDate('')
  setTime('')
  setNumber('')
}

    return(
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={date}
          onChange={event => setDate(event.target.value)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={event => setTime(event.target.value)}
        />

        <input
          type='text'
          placeholder='Number of guests'
          name='number'
          value={number}
          onChange={event => setNumber(event.target.value)}
        />

        <button onClick = { event => enterReservation(event)}>Make A Reservation</button>
      </form>
    )
}

export default Form