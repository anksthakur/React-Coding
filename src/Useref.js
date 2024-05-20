import React, { useRef } from 'react'

const Useref = () => {
    let inputRef = useRef(null);
    function handleInput(){
        console.log(inputRef.current.value );
        // input field m value add krne ke ley
        inputRef.current.value = "1000"
        // focus input field m rhe
        inputRef.current.focus();
        // color change
        inputRef.current.style.color = "orange";
    }
  return (
    <div>
      <h1>useRef Hook</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={handleInput}>handle input</button>
    </div>
  )
}

export default Useref
