import './Appli.scss';
import Popup from 'reactjs-popup';
import { Switch, Route } from 'react-router-dom';
import Entete from './Composants/Entete';
import Pied2Page from './Composants/Pied2Page';
import Accueil from './Composants/Accueil';
import PageJeux from './Composants/PageJeux';
import PageGraphisme from './Composants/PageGraphisme';
import PageWeb from './Composants/PageWeb';
import PageAudiovisuel from './Composants/PageAudiovisuel';
import Contact from './Composants/Contact';


import BurgerIcon from './Composants/BurgerIcons';
import Menu from './Composants/Menu';

const contentStyle = {
	background: 'rgba(255,255,255,0)',
	width: '80%',
	border: 'none'
};

export default function Appli() {
	return (
		<div id="tagTop" className="page">
			<Entete />
			<section className="App">
				<Switch>
					<div>
						<Popup
							modal
							overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
							contentStyle={contentStyle}
							closeOnDocumentClick={false}
							trigger={(open) => <BurgerIcon open={open} />}
						>
							{(close) => <Menu close={close} />}
						</Popup>
					
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
					</div>
				</Switch>
			</section>
			<Pied2Page />
		</div>
	);
}
