import React,{useContext} from 'react'
import { data ,data1} from './App'

const ChildC = () => {
    const n = useContext(data)
    const g = useContext(data1)
  return (
    <>
    <h1> My name is  {n}</h1>
    <h1> My Gender is  {g}</h1>
    </>
  )
}
export default ChildC
