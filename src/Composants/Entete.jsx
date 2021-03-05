import './Entete.scss';
import Logo from '../images/Logo.png';
import { NavHashLink } from 'react-router-hash-link';

export default function Entete() {

  return (
    <header className="Entete"> 
      <div><NavHashLink to="/#tagTop"> <img className="Logo" src={Logo} alt="Logo Charles Noel" /></NavHashLink><h3>Charles Noel</h3></div>
      
      <ul className="navPrincipale">
        <li><NavHashLink to="/#tagProjet" activeClassName="selected" activeStyle={{ color: 'rgb(186, 206, 121)' }}>Projets</NavHashLink></li>
        <li><NavHashLink to="/contact/#tagTop" activeClassName="selected" activeStyle={{ color: 'rgb(109, 56, 56)'}}>Contact</NavHashLink></li>
      </ul>
      <ul className="navWidget">
					<li>
						<NavHashLink to="/jeux/#tagTop" activeClassName="selected" activeStyle={{ color: 'rgb(186, 206, 121)' }} >jeux</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/graphisme/#tagTop" activeClassName="selected" activeStyle={{ color: 'rgb(186, 206, 121)' }} >graphisme</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/web/#tagTop" activeClassName="selected" activeStyle={{ color: 'rgb(186, 206, 121)' }} >web</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/audiovisuel/#tagTop" activeClassName="selected" activeStyle={{ color: 'rgb(186, 206, 121)' }} >audiovisuel</NavHashLink>
					</li>
				</ul>
    </header>
  );
}