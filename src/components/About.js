import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1> About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perferendis ab nulla, dignissimos exercitationem amet aspernatur alias iste reprehenderit laudantium repellat fugiat quos reiciendis nihil illum velit quod veniam autem.</p>
      <Link to="/student">Go to Student Page</Link>
    </div>
  )
}

export default About
