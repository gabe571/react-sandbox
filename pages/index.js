import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

export default function Home() {


  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [countReset, setCountReset] = useState(0);

  return (
    <div>
     <button onClick={() => setCount(count + 1)}> Up {count} </button>
     <br></br>
     <button onClick={()=> setCountDown(countDown - 1)}> Down {countDown}</button>
     <br></br>
     <button onClick={() => setCountReset(countReset(0))}> Reset </button>
    </div>
  )
}
