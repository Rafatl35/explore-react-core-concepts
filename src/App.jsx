import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['sakib', 'suvo', 'raj', 'karim'];

  const singers =[
    {id:1, name: 'Mahfuzur Rahman', age: 68},
    {id:2, name: 'Eva Rahman', age: 38},
    {id:3, name: 'abul', age: 28},
    {id:4, name: 'habu', age: 35},
  ]

  return (
    <> 
      <h3>Vite + React</h3>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name={"Harry"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="15"></Device>
      <Device name="watch" price="5"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score={85}></Student>
      <Student ></Student>
      <Developer></Developer> */}
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

const {grade, score} = {grade: '7', score: '99'}
function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>

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
