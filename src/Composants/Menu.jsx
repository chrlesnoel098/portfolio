import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

  // Obtenir l'année courante
  const annee = (new Date()).getFullYear();

  
// eslint-disable-next-line
export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/jeux">
          Jeux
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/graphisme">
          Graphisme
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/web">
          Web
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/audiovisuel">
          Audiovisuel
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
    <p>Charles Noel Portfolio 	<FontAwesomeIcon icon={faReact} size="2x" /> / / react &copy; {annee}</p> 
  </div>
);
