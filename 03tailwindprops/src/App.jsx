import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    name:"karan",
    age:22
  }

  return (
    <>
         <Card  myobj="hello world" btnText="click me"/>
         <Card myobj="karan" btnText="dont click"/>
    </>
  )
}

export default App
