import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link></li>
            <li> <Link to='/Post'>New Post</Link></li>
            <li><Link to='/filter'>Filter</Link></li>
        </ul>
    </div>
  )
}

export default Nav
