// function component

import React, { useEffect } from 'react'

const Useeffectclass = (props) => {
    // condition lgani hai ki kisi 1 state pe he useEffect call ho
    // const [count,setCount] = useState(0);
    // const [data,setData] = useState(10);
    // useEffect(()=>{
    //     // alert("useEffect Called")
    //     // by default bhi chlega state ke update pe bhi chlega aur props ke update bhi chlega
    //     console.log("useEffect called with data state")
    // },[data])// condition lgti hai yha pe},[])
    // yha humne data put kar deya to ye data pe jab click krenge tbhi update hoga
    // useEffect(()=>{
    //     console.log("useEffect called with count state")
    // },[count])

    // Props ke sath useEffect
    useEffect(()=>{
        console.log("Count is ", props.count);
        console.log("Data is ", props.data);
    },[props.count , props.data])
  return (
    <div>
       <h1>Count Props : {props.count}</h1>
       <h1>Data Props : {props.data}</h1>
       
    </div>
  )
}

export default Useeffectclass;
