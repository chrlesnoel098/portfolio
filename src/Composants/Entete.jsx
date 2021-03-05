import './Entete.scss';
import Logo from '../images/Logo.png';
import { NavHashLink } from 'react-router-hash-link';

export default function Entete() {

  return (
    <header className="Entete"> 
      <div><NavHashLink to="/#tagTop"> <img className="Logo" src={Logo} alt="Logo Charles Noel" /></NavHashLink><h3>Charles Noel</h3></div>
      <ul className="navPrincipale">
        <li><NavHashLink to="/#tagProjet" activeClassName="selected" activeStyle={{ color: 'lightgrey' }}>Projets</NavHashLink></li>
        <li><NavHashLink to="/contact/#tagTop" activeClassName="selected" activeStyle={{ color: 'lightgrey' }}>Contact</NavHashLink></li>
      </ul>
    </header>
  );
}