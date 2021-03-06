import './PageWeb.scss';
import React from 'react';
import ReactPlayer from 'react-player';
import { SRLWrapper } from 'simple-react-lightbox';
import auberge from '../images/web-auberge.png';
import block from '../images/web-block.png';
import tim from '../images/web-tim.png';

const options = {
	settings: {
		overlayColor: 'white',
		autoplaySpeed: 1500,
		transitionSpeed: 900
	},
	caption: {
		captionColor: '#a6cfa5',
		captionFontFamily: 'Raleway, sans-serif',
		captionFontWeight: '300',
		captionTextTransform: 'uppercase'
	}
};

export default function PageWeb() {
	return (
		<div className="PageWeb">
			<div className="section-1">
				<h1>Programmation web</h1>
				<h2>html / css / php / javascript</h2>
				<ul className="navPrimaire">
					<li>
						<a href="https://epic-cori-cc26fd.netlify.app/" target="_blank" rel="noopener noreferrer">
							<img src={auberge} alt="lien auberge de jeunesse de tadoussac" />
							<div className="middle">
								<div className="text">
									Refonte du site web  <br /> de l'auberge de   <br /> jeunesse tadoussac <br /> <br /> cliquez
								</div>
							</div>
						</a>
					</li>

					<li>
						<a href="https://determined-poitras-e79357.netlify.app" target="_blank" rel="noopener noreferrer">
							<img src={block} alt="lien jeu de block" />
							<div className="middle">
								<div className="text"> Application web <br />  d'un jeu CandyCrush <br /> Phaser.Js <br /> <br /> cliquez</div>
							</div>
						</a>
					</li>

					<li>
						<a href="https://github.com/chrlesnoel098/2020_PROD" target="_blank" rel="noopener noreferrer">
							<img src={tim} alt="lien github site web techniques integration multimedia" />
							<div className="middle">
								<div className="text"> 	Refonte du site web <br /> de la Technique   <br />  multimédia <br /> <br /> cliquez</div>
							</div>
						</a>
					</li>
				</ul>


				<div className="player-wrapper">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=V4v_-VtWItM"
						className="react-player"
						width="65vw"
						height="30vw"
						playing={true}
						muted={true}
						loop={true}
					/>
				</div>

			</div>

			<div className="section-2">
				<h1>infographie et maquette</h1>
				<h2>adobe xd</h2>

				<SRLWrapper options={options}>
					<div>
						<img src={process.env.PUBLIC_URL + '/images-web/img-web-1.png'} alt="" />
						<img src={process.env.PUBLIC_URL + '/images-web/img-web-2.png'} alt="" />
					</div>
				</SRLWrapper>
			</div>

		</div>
	);
}
