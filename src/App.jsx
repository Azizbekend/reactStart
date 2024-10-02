import { useState } from 'react'
import viteLogo from '/i.webp'
import reactLogo from '/sun.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ватрушка - это солнце</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Ты кликнул {count} раз
        </button>
        <p>
          Молодец, классно время потратил :)
        </p>
      </div>
      <p className="read-the-docs">КЛИКАРЬ</p>
    </>
  )
}

export default App
