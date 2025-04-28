import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-item'>
            <Link to="/" className='navbar-link'>Inicio</Link>
            </li>
            <li className='navbar-item'>
            <Link to="/poke" className='navbar-link'>Pokémon</Link>
            </li>
            <li className='navbar-item'>
            <Link to="/cat" className='navbar-link'>Gatos</Link>
            </li>
            <li className='navbar-item'>
            <Link to="/rickmorty" className='navbar-link'>Rick y Morty</Link>
            </li>
        </ul>

    </nav>
    
    

    
  )
}
