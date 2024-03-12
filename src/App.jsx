import { useState } from 'react'

import './App.css'
import TabText from './tabs-text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TabText/>
    </>
  )
}

export default App
