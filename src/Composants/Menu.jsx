import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import Logo from '../images/Logo.png';

  // Obtenir l'année courante
  const annee = (new Date()).getFullYear();

  
// eslint-disable-next-line
export default ({ close }) => (
  <div className="menu">
       <div><NavHashLink to="/#tagTop"> <img className="Logo" src={Logo} alt="Logo Charles Noel" /></NavHashLink></div>
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/jeux/#tagTop">
          Jeux
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/graphisme/#tagTop">
          Graphisme
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/web/#tagTop">
          Web
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/audiovisuel/#tagTop">
          Audiovisuel
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/contact/#tagTop">
          Contact
        </NavLink>
      </li>
    </ul>
    <p>Charles Noel Portfolio 	<FontAwesomeIcon icon={faReact} size="2x" /> / / react &copy; {annee}</p> 
   
  </div>
);
