import './Accueil.scss';
import { NavHashLink } from 'react-router-hash-link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SocialFollow from '../SocialFollow';

export default function Accueil() {
	return (
		<div className="Accueil">
			<div className="section-1">
        <h1 className="glitch" data-text="
Designer /">Désigner / </h1>
				<h2>Désigner / intégrateur</h2>
				<SocialFollow />

				<div className="plus">
					<NavHashLink to="/#tagProjet">
						<ExpandMoreIcon />
					</NavHashLink>
				</div>
			</div>

			<div id="tagProjet" className="section-2">
				<div className="navSecondaire">
					<li>
						<NavHashLink to="/jeux/#tagTop">jeux</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/graphisme/#tagTop">graphisme</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/web/#tagTop">web</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/audiovisuel/#tagTop">audiovisuel</NavHashLink>
					</li>
				</div>
			</div>
		</div>
	);
}
