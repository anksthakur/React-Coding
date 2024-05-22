import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchParamsHook = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    //console.log(searchParams.get("age"));
    const age = searchParams.get("age");
    const city = searchParams.get("city");
  return (
    <div>
      <h1> Search params hook</h1>
      <h3>My age is {age}</h3>
      <h3>My city is {city}</h3>
      <button onClick={()=>setSearchParams({city:"Chandigarh",age:28})}>Set my Data</button>
    </div>
  )
}

export default SearchParamsHook
