import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += "0123456455879875461326548796541265487989"
    if (charAllowed) str += "!@#$%^&*()_+~`[]{}-=|:;'<>,.?/!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)




  }, [length, numbersAllowed, charAllowed, setPassword],)


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  },
    [length, numbersAllowed, charAllowed,
      passwordGenerator])

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 bg-white text-center">Passsword Generator</h1>
      <div className='max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white text-orange-500'>
        <h1 className="text-3xl font-bold text-gray-900 bg-white text-center">Password Generator</h1>
        <div className='flex shadow round-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='w-full px-4 py-3 text-gray-700 focus:outline-none'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            onclick="this.classList.add('bg-gray-800'); this.classList.remove('bg-violet-500', 'hover:bg-violet-600', 'focus:outline-2', 'focus:outline-offset-2', 'focus:outline-violet-500', 'active:bg-violet-700')"
            classname="bg-gray-600 hover:bg-gray-800 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 
         active:bg-violet-700 text-white font-bold py-2 px-4 rounded-full">Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input type='checkbox'
              checked={numbersAllowed}
              onChange={(e) => {
                setNumbersAllowed((prev) => !prev)
              }}
              className='text-orange-500  cursor-pointer'
            />
            <label className='text-black'>Numbers</label>

            <br />

            <input type='checkbox'
              checked={charAllowed} onChange={(e) => {
                setCharAllowed((prev) => !prev)
              }}
              className='text-orange-500 cursor-pointer'
            />
            <label className='text-black'>Charactor</label>

            <br />

            <input type='range'
              min={6} max={100} value={length}
              className='text-orange-500  cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-black'>Length: {length}</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
