import React from 'react'
// prop ko parameter pass kiya
const FunComp = (prop) => {
    const red = ()=>{
        alert("red fun called")
    }
  return (
    <>
        {/* prop ko get kiya */}
        {/* onClick event lgaya */}
      <h1 onClick={red}>I am a function component ...{prop.text}</h1>
    </>
  )
}
// func(abc)
export default FunComp;
