import { NavLink } from "react-router";
import Instruction from "./Instruction";

function Header() {
  return (

    <header>
      <h1>¡Cuidado con Grogu!</h1>
      <nav>
       
      
          <li className="footer__menu-item">
          <NavLink  to="/">A jugar</NavLink>
          </li>
          <li className="footer__menu-item">
          <NavLink  to="/instruction">¿Cómo se juega?</NavLink>
          </li>
          <li className="footer__menu-item">
          <NavLink  to="/option">Más opciones</NavLink>
          </li>
 
        
      </nav>
    </header>
    
  )
}

export default Header
