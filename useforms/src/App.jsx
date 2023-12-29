import { useState } from 'react'
import './App.css'
import Forms from './components/Forms'
import FormsUse from './components/FormUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Forms /> */}
      <FormsUse />
    </>
  )
}

export default App
