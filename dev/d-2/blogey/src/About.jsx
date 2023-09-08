import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate() ;
  return (
    <div>
     <h1>about</h1>
     <button  onClick={()=>{navigate('/filter')}}>Go to FIlter page</button>
    </div>
  )
}

export default About
