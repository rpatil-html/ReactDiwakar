import { useState } from 'react'
import './App.css'

function App() {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

const hendlechendname=(e)=>{
  setname(e.target.value)
}
const handleEmail=(e)=>{
  setemail(e.target.value)
}
const handlePassword=(e)=>{
  setpassword(e.target.value)
}
  const handelsubimt=(e)=>{
    e.preventDefault()
    const userdata={
      name:name,
      email:email,
      password:password
    }
    console.log(userdata)
    

  }

  return (
    <>  
           <h1>Form Data</h1>
          <form onSubmit={handelsubimt}>
            <input type="text" placeholder="name" value={name} onChange={hendlechendname} /><br /><br />
            <input type="text"  placeholder="emali" value={email} onChange={handleEmail}/><br /><br />
            <input type="password"  placeholder="password" value={password} onChange={handlePassword}/><br /><br />
            <button>subimt</button>
        </form>
    </>
  )
}

export default App
