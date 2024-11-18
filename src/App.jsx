import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increaseCounter = ()=>{
    setCount((prev)=>{
      return prev+1;
    });
  }


  // const increaseCounter = ()=>{
  //   setCount(count+4)
  // }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCounter}>Click</button>
    </>
  )
}

export default App
