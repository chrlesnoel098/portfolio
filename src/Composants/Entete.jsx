import './Entete.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Entete() {

  return (
    <header className="Entete"> 
      <div><Link to="/">Logo</Link></div>
      <ul className="navPrincipale">
        <li><NavLink to="/" activeClassName="navActive">Projets</NavLink></li>
        <li><NavLink to="/contact" activeClassName="contact">Contactez-nous</NavLink></li>
      </ul>
    </header>
  );
}