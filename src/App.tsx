// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Notes from './components/Notes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Notes
    url={import.meta.env.VITE_URL}/>
    </>
  )
}

export default App
