import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state,action)=>{
    console.log(state,action);
    if(action.type === "Increment"){
        return state+1;
    }
    if(action.type === "Decrement"){
        return state-1;
    }
return state;
}

const UseReducer = () => {
    //const [count,setCount]=useState(0);
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <h1> useReducer Hook</h1>
      {/* <h1>Count : {count}</h1> */}
      <h1>Count : {state}</h1>
      {/* <button onClick={()=>{setCount(count+1)}}>Increrment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button> */}
      {/* useReducer */}
      <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>
    </div>
  )
}
export default UseReducer