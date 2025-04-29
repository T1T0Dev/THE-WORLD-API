import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-item'>
            <Link to="/" className='navbar-link'>🏠</Link>
            </li>
            <li className='navbar-item'>
            <Link to="/poke" className='navbar-link'>⚡🔴 </Link>
            </li>
            <li className='navbar-item'>
            <Link to="/cat" className='navbar-link'>🐱🧶 </Link>
            </li>
            <li className='navbar-item'>
            <Link to="/rickmorty" className='navbar-link'> 🛸🧪</Link>
            </li>
        </ul>

    </nav>
    
    

    
  )
}
