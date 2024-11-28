import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  const count = useRef(0);

  const increaseCount = ()=>{
    setValue((prev)=>{
     return prev+1
    })
  }
  const decreaseCount = ()=>{
    setValue((prev)=>{
     return prev-1
    })
  }

  useEffect(()=>{
    count.current = count.current+1;
  })

  console.log(count);

  return (
    <>
      <button onClick={decreaseCount}>-1</button>
      <h1>{value}</h1>
      <button onClick={increaseCount}>+1</button>

      <h1>Render Count : {count.current}</h1>
    </>
  )
}

export default App
