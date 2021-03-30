import './Accueil.scss';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player';
import SocialFollow from './SocialFollow';
import jeu from '../images/jeux.png';
import graphisme from '../images/graphisme.png';
import son from '../images/son.jpg';
import web from '../images/web.jpg';

export default function Accueil() {
	return (
		<div className="Accueil">
			<div className="section-1">
				<h1 className="glitch" data-text="Designer /">
					Designer /
				</h1>
				<h2>Designer / intégrateur</h2>
				<SocialFollow />
				<h3 className="titreMobile">Charles Noël</h3>
				<div className="plus">
					<NavHashLink to="/#tagProjet">
						<ExpandMoreIcon />
					</NavHashLink>
				</div>
			</div>

			<div id="tagProjet" className="section-2">
				<ul className="navSecondaire">
					<li>
						<NavHashLink to="/jeux/#tagTop">
							<img className="lienJeu" src={jeu} alt="projet de jeu" />
							<div className="middle">
							<div className="text">Jeux</div>
						</div>
						</NavHashLink>
					
					</li>
					<li>
						<NavHashLink to="/graphisme/#tagTop">
							<img className="lienGraphisme" src={graphisme} alt="projet de graphisme" />
							<div className="middle">
							<div className="text">Graphisme</div>
						</div>
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/web/#tagTop">
							<img className="lienWeb" src={web} alt="projet de web" />
							<div className="middle">
							<div className="text">Web</div>
						</div>
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to="/audiovisuel/#tagTop">
							<img className="lienSon" src={son} alt="projet audiovisuel" />
							<div className="middle">
							<div className="text">Audiovisuel</div>
						</div>
						</NavHashLink>
					</li>
				</ul>
			</div>
			<div className="player-wrapper">
				<ReactPlayer
					url="https://www.youtube.com/embed/m_AFwwJTuAE"
					className="react-player"
					width="65vw"
					height="30vw"
					allow='autoplay; encrypted-media'
					playing={false}
					controls={true}
					muted={true}
					loop={true}
					config={{ youtube: { playerVars: { showinfo: 1 } }}} 
				/>
			</div>
		</div>
	);
}
