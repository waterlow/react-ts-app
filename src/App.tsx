import React, { useState, useEffect, useCallback, MouseEventHandler } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const handleClick = useCallback<MouseEventHandler>(
    (e) => alert(e.target), []
  )

  useEffect(() => {
    async function getMessage() {
      const res = await fetch('/api/hello?name=water')
      const message = await res.text()
      setMessage(message)
    }
    getMessage()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Learn React
        </a>
        {message}
      </header>
    </div>
  )
}

export default App
