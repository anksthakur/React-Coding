import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Got ot About Page</Link><br/>
      {/* useNavigate */}
      <button onClick={()=>navigate("/about")}>Go to About Page</button><br/>
      <button onClick={()=>navigate("/student")}>Go to Student Page</button>
    </div>
  )
}

export default Home
