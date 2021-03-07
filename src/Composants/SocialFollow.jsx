import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import sketchfab from '../images/sketchfab.svg';

export default function SocialFollow() {
	return (
		<div className="social-container">
			<a href="https://www.behance.net/CharlesNoelArt/" className="behance social" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faBehance} size="2x" />
			</a>
			<a href="https://www.linkedin.com/in/charles-no%C3%ABl-74b3b1142" className="linkedin social" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</a>
			<a href="https://github.com/chrlesnoel098" className="github social" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
			<a href="https://sketchfab.com/charlesnoel" className="sketchfab social" target="_blank" rel="noopener noreferrer">
				<img src={sketchfab} alt="githubIcon" />
			</a>
		</div>
	);
}
