import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid';
import Form from './Form';

const initialTeam = [
  { id: uuid(), fname: 'Loc', lname: 'Giang', email: 'Locbgiang@gmail.com', role: 'Front-end Engineer' }
]

function App() {
  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newTeam = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    }
    setTeam([...team, newTeam]) 
  }
  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />

      <h3>List of team:</h3>
      {
        team.map(fr => <div key={fr.id}>{fr.fname} {fr.lname}<br/> {fr.email} <br/>{fr.role}<br/><br/></div>)
      }
    </div>
  );
}

export default App;
