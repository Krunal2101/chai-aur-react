import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Counter, setCounter] = useState(5)

  //let Counter = 5;

  const addValue = ()=>{
    if (Counter < 20) {
      Counter = Counter + 1;
      setCounter(Counter)
    }
  }

  const removeValue = () => {  
    if (Counter >= 1) {
      setCounter(Counter - 1)
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value :{Counter}</h2>

    <button onClick= {addValue}>Add Value</button>
    <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
