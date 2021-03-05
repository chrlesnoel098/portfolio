import './Pied2Page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Pied2Page(props) {
    // Obtenir l'année courante
    const annee = (new Date()).getFullYear();

    return (
        <footer>
          <p>Charles Noel Portfolio 	<FontAwesomeIcon icon={faReact} size="2x" /> / / react &copy; {annee}</p> 
        </footer>
    );
}