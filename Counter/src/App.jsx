import React, { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count - 1)
  }

  const decrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <>
      <div style={{backgroundColor:"cadetblue", height:"550px", width:"60%",position:"absolute",left:"20%", top:"10%", borderRadius:"35px"}}>
        <h1 style={{ textAlign: "center",position:"relative",top:"15%",fontSize:"35px" }}>Counter</h1>
        <h1 style={{ textAlign: "center",position:"relative",top:"15%",fontSize:"35px" }}>{count}</h1>
        <button style={{ marginLeft: "28%", backgroundColor: "orange",height:"50px", width:"15%",position:"relative",top:"20%" }} onClick={decrementCount}>increment</button>
        <button style={{ marginLeft: "1%",backgroundColor:"red",height:"50px", width:"15%",position:"relative",top:"20%" }} onClick={resetCount}>Reset</button>
        <button style={{ marginLeft: "1%",backgroundColor:"green", height:"50px", width:"15%",position:"relative",top:"20%" }} onClick={incrementCount}>decrement</button>
      </div>
    </>
  )
}

export default Counter
