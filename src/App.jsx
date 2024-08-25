import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <> 
      <h1>Vite + React</h1>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="15"></Device>
      <Device name="watch" price="5"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This device: {props.name} price: {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 30;
  const person = {name: 'sakib', age: 23}
  return <h3>I am {person.name} person with age: {age}</h3>
}

function Student(props){
  console.log(props)
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>Age:</p>

  </div>
  )
}

function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
