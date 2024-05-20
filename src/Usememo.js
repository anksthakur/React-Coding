import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);
    
    const countMemo = useMemo(
        function multiCount (){
            console.log("multiCount fun called")
            return count*5;
        },[count])
  return (
    <div>
      <h1> Count : {count}</h1>
      <h1> Item : {item}</h1>
      <h2>{countMemo}</h2>
      <button onClick={()=>{setCount(count+1)}}> Update Count</button>
      <button onClick={()=>{setItem(item*2)}}> Update Item</button>
    </div>
  )
}

export default Usememo
