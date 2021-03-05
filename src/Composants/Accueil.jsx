import './Accueil.scss';
import { NavLink } from 'react-router-dom';
import SocialFollow from "../SocialFollow";

export default function Accueil() {
  return (
    <div className="Accueil">
      <h2>Designer / integrateur</h2>
             <SocialFollow />
        <li><NavLink to="/jeux" activeClassName="navActive">jeux</NavLink></li>
        <li><NavLink to="/graphisme" activeClassName="navActive">graphisme</NavLink></li>
        <li><NavLink to="/web" activeClassName="navActive">web</NavLink></li>
        <li><NavLink to="/audiovisuel" activeClassName="navActive">audiovisuel</NavLink></li>
    </div>
  );
}

