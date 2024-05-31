import React from 'react'

function Post({title,body}) {
  return (
    <div className="rp">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  )
}

export default Post
