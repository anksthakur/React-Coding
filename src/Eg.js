import React from 'react'

// function component
const Eg = (prop) => {
    const blue =()=>{
        alert("blue color is set ")
    }
  return (
    <div>
      <h1 onClick={blue}> example for class component ---- {prop.text}</h1>
    </div>
  )
}

export default Eg


