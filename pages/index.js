import React, { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseAndLog = () => {
    setCount(count + 1)
    console.log('ayyyyyeee console and updating')
  }

  return (
    <div>
      <button onClick={increaseAndLog}>  {count}</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>  {count}</button>
    </div>
  )
}


export default Counter