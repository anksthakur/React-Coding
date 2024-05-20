// useEffect m hume bydefault cleanup function milta hai
import React, { useState,useEffect } from 'react'

const Returninuseeffect = () => {
    const [width,setWidth] = useState(window.screen.width);
    const actualWidth =()=>{
        //console.log(window.innerWidth);
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        console.log("Add event")
        window.addEventListener("resize", actualWidth);
        
        return ()=>{// to cleanup extra memory
            console.log("Remove event")
            window.removeEventListener("resize",actualWidth);
        }
    });
  return (
    <div>
      <p>The actual size of window :</p>
      <h1>{width}</h1>
    </div>
  )
}

export default Returninuseeffect
