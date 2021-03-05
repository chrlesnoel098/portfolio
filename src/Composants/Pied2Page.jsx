import './Pied2Page.scss';

export default function Pied2Page(props) {
    // Obtenir l'année courante
    const annee = (new Date()).getFullYear();

    return (
        <footer>
           Charles Noel Portfolio &copy; {annee}
        </footer>
    );
}