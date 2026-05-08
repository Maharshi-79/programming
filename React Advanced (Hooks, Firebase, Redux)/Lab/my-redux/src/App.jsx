import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyTask from './assets/features/MyTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <MyTask />
  )
}

export default App
