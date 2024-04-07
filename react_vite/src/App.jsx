import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=10;

function App() {
  //hooks 
  let [counter,setCounter]=useState(10)

  //add funtion
  const addOne=()=>{
    console.log(counter);
    counter=counter+1;
    setCounter(counter);
  }

  //sub function
  const subOne=()=>{
    counter=counter-1;
    setCounter(counter);
  }



  return (
    <>
      <div>
        <h1>This is my React App. {counter}</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={addOne}>Plus{counter}</button>
        <br />
        <br />
        <button onClick={subOne}>Minus{counter}</button>
      </div>
    </>
  )
}

export default App
