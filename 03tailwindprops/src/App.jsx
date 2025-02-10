import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-8">Vite + React + Tailwind</h1 >
      <Card />
      <Card username='Shanu Karn' role='Web Dev' image='https://images.unsplash.com/photo-1735776327649-eeb6b6ed8829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D' />
      <Card />
      <Card />
    </>
  )
}

export default App
