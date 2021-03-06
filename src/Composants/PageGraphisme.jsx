import './PageGraphisme.scss';
import { SRLWrapper } from 'simple-react-lightbox';
import { NavHashLink } from 'react-router-hash-link';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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

export default function PageGraphisme() {
	return (
		<div className="PageGraphisme">
			<h1>
				<span className="fill">Photoshop</span> <span className="stroke">illustrator</span>
				<span className="fill">Photoshop</span> <span className="stroke">illustrator</span>
				<span className="fill">Photoshop</span> <span className="stroke">illustrator</span>
			</h1>
			<h2>
				<span className="stroke">illustrator</span> <span className="fill">Photoshop</span>
				<span className="stroke">illustrator</span> <span className="fill">Photoshop</span>
				<span className="stroke">illustrator</span> <span className="fill">Photoshop</span>
			</h2>

			<SRLWrapper options={options}>
				<div className="logoTop">
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-1.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-2.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-3.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-4.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-5.png'} alt="" />
				</div>

				<div className="contenuLogo">
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-6.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-7.png'} alt="" />
					<h3>Atelier Petite Furie</h3>
					<p>Compagnie de textile / création logo de compagnie</p>

					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-8.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-9.png'} alt="" />
					<h3>D et A Rénovation</h3>
					<p>Compagnie d'excavation / création logo de compagnie</p>

					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-10.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-11.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-12.png'} alt="" />
					<img src={process.env.PUBLIC_URL + '/images-graphisme/img-13.png'} alt="" />
					<h3>Création d'environnement de jeu 2D</h3>
					<p>Composition de type collage photoshop</p>
				</div>
			</SRLWrapper>
			<div className="top">
				<NavHashLink to="/graphisme/#tagTop">
					<ArrowUpwardIcon />
				</NavHashLink>
			</div>
		</div>
	);
}
