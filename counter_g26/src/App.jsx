import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 

function App() {
  // const [count, setCount] = useState(0)

  //Hook
 let  [counter,useCount]=useState(10)


  let addOne = () => {
    counter=counter+1;
    console.log(counter)
    useCount(counter);
  }

  let subOne = () => {
    counter=counter-1;
    console.log(counter)
    useCount(counter);
  }


  return (
    <>
      <h1>This is react app {counter}</h1>
      <h1>Counter : {counter} </h1>
      <button onClick={addOne}  >Add {counter}</button>
      <button onClick={subOne}>Minus{counter}</button>
    </>
  )
}

export default App
