import React from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Student = () => {
  const params = useParams();
  const {name} = params;
  return (
    <div>
      <h1> {name} Student Page</h1>
      {/* <Link to="/">Go to Home Page</Link> */}
    </div>
  )
}

export default Student
