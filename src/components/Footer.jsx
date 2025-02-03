import React from 'react'
import { NavLink } from "react-router"

function Footer() {
  return (
    <>
    <footer className="footer">

      <nav>
       
        <ul>
          <li className="footer__menu-item">
          <NavLink  to="/">A jugar</NavLink>
          </li>
          <li className="footer__menu-item">
          <NavLink  to="/instruction">¿Cómo se juega?</NavLink>
          </li>
          <li className="footer__menu-item">
          <NavLink  to="/option">Más opciones</NavLink>
          </li>
        </ul>
        
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
    
    </> )
 
}

export default Footer
