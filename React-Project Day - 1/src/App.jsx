import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",backgroundColor:"aqua"}}>
            <h1>logo</h1>
          <h3 style={{fontSize:"25px"}}>Home</h3>
          <h3 style={{fontSize:"25px"}}>About</h3>
          <h3 style={{fontSize:"25px"}}>Contact</h3>
       <p>
          <i class="fa-brands fa-facebook" style={{paddingLeft:"5px",fontSize:"30px"}}></i>
          <i class="fa-brands fa-twitter"style={{paddingLeft:"15px",fontSize:"30px"}}></i>
          <i class="fa-brands fa-instagram"style={{paddingLeft:"20px",fontSize:"30px"}}></i>
          </p>
          </div>
          <div style={{height:"350px",width:"100%",backgroundColor:"blueviolet",display:"flex"}}>

            <div style={{width:"40%",position:"relative",left:"10%"}}>
              <h2 style={{paddingLeft:"25%",fontSize:"35px"}}>Header Footer</h2>
              <p style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            </div>
            <div style={{width:"50%",position:"relative",left:"10%"}}>
              <img src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:"100%",height:"350px"}}></img>
            </div>
          </div>
        
       </div>
    </>
  )
}

export default App
