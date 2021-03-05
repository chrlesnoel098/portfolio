import './Appli.scss';
import Entete from './Composants/Entete';
import Pied2Page from './Composants/Pied2Page';
import { Switch, Route } from 'react-router-dom';
import Accueil from './Composants/Accueil';
import PageJeux from './Composants/PageJeux';
import PageGraphisme from './Composants/PageGraphisme';
import PageWeb from './Composants/PageWeb';
import PageAudiovisuel from './Composants/PageAudiovisuel';
import Contact from './Composants/Contact';

export default function Appli() {
	return (
		<div id="tagTop" className="page">
			<Entete />
			<section className="App">
				{/* Switch permet d'inclure les composants requis selon l'URL dans le lien */}
				<Switch>
					{/* Route match (apparie) chaque URL avec un lien et inclut le composant corerspondant */}
					<Route path="/" component={Accueil} exact />
					<Route path="/jeux" exact>
						<PageJeux />
					</Route>
					<Route path="/graphisme" exact>
						<PageGraphisme />
					</Route>
					<Route path="/web" exact>
						<PageWeb />
					</Route>
					<Route path="/audiovisuel" exact>
						<PageAudiovisuel />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
				</Switch>
			</section>
			<Pied2Page />
		</div>
	);
}
