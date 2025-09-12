import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "krunal",
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username= "chai aur code" btnText="click me" />
      <Card username= "krunal" btnText="tap me"/>
    </>
  )
}

export default App
