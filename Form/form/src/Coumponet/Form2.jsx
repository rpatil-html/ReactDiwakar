import React from 'react'

function Form2() {

  const setData=(e)=>{
      e.preventDefault()
      

  }

  return (
    <>
    <h1>Form Data</h1>
      <form>
        <input type="text" placeholder="name" onChange={()=>console.log(setData)}/><br /><br />
        <input type="text" placeholder="email" /><br /><br />
        <input type="text" placeholder="password"/><br /><br />
        <button>submit</button>
      </form>
    </>
  )
}

export default Form2


