import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export const Navbar = ({currentPath}) => {

  let activeClass='';
  if (currentPath === '/') activeClass = 'navbar-home';
  else if (currentPath === '/poke') activeClass = 'navbar-pokemon';
  else if (currentPath === '/cat') activeClass = 'navbar-cat';
  else if (currentPath === '/rickmorty') activeClass = 'navbar-rick';

  return (
    
    //Concateno Strings para agregar la clase activa a la barra de navegación según la ruta actual
    <nav className={`navbar ${activeClass}`}>
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
