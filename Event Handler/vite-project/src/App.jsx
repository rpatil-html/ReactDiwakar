import { useEffect, useState } from 'react'
import './App.css'
import Post from './Components/Post'

function App() {
  const [data, setdata] = useState([])

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <button onClick={handleClick}>GET POSTS</button>
      <div>
        {data.map((el) => (
          <Post title={el.title} body={el.body} />
        ))}

      </div>
    </div>
  )
}

export default App
