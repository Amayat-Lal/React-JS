import { useState } from 'react'
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add Value</button>
      <button onClick={() => setCounter(counter - 1)}>Remove Value</button>
      <p>footer: </p>
    </>
  )
}
export default App
