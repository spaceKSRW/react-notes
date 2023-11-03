import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  const addvalue = () => {

    setCounter(counter+1)
    console.log("Value added : ", Math.random())
  }
  const subValue=()=>{
    setCounter(counter-1)
    console.log("subtracted value"+counter)
  }
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value :{counter}</h2>
      <div className="buttons">
        <button onClick={addvalue} className="button1">Add value</button>
        <br></br>
        <button onClick={subValue} className="button2">Subtract value</button>
      </div>

    </>
  )
}

export default App
