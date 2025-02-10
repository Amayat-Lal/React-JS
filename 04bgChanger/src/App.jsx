import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <h1 className="text-3xl m-8 font-bold text-center underline from-green-400 to-blue-500">
        A bg changer app using React, Vite and Tailwind CSS
      </h1>
      <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundColor: color }}>
        <div className="flex space-x-4">
          <button onClick={() => setColor('blue')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow"
          >
            BLUE
          </button>
          <button onClick={() => setColor('green')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow"
          >
            GREEN
          </button>
        </div>
      </div>
    </>
  )
}

export default App
