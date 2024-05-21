import React, { useState } from 'react'

const Highordercomp = () => {
  return (
    <div>
      <h1>High Order Component</h1>
      {/* <Counter/>
      <Counter/> */}
      {/* HOC m get kiya Counter ko */}
      <HOCB cmp={Counter}/>
      <HOCR cmp={Counter}/>
      <HOCG cmp={Counter}/>
    </div>
  )
}
// high order component
// alg se style de skte hai etc
function HOCB(props){
    return (
        <>
        <h2 style={{backgroundColor:"blue",width:100}}>Blue<props.cmp/></h2>
        </>
    )
}
function HOCR(props){
    return (
        <>
        <h2 style={{backgroundColor:"red",width:100}}>Red<props.cmp/></h2>
        </>
    )
}
function HOCG(props){
    return (
        <>
        <h2 style={{backgroundColor:"green",width:100}}>Green<props.cmp/></h2>
        </>
    )
}
function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}

export default Highordercomp
