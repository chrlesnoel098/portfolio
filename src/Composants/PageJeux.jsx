import './PageJeux.scss';
import ReactPlayer from 'react-player';

export default function PageJeux() {
  return (
    <div className="PageJeux">
      <div className="section-1">
        <h1>modélisation / texture et lumière</h1>
        <h2>Maya sketchfab ar</h2>
        <div className="sketchfab-embed-wrapper">
          <iframe title="Rat de l'espace" src="https://sketchfab.com/models/3986fcee784541b2b2da7d70902d358e/embed">
          </iframe>

          <iframe title="Pieuvre transporteuse" src="https://sketchfab.com/models/0cb341eb092e4ac7aada14e2391b12ef/embed">
          </iframe>

          <iframe title="Objet_Énergie" src="https://sketchfab.com/models/f041b2fd0f3b49338632e4686c7ffc98/embed">
          </iframe>
        </div>
      </div>
      <div className="section-2">
        <h1>Animation 3D</h1>
        <h2>Maya</h2>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ojaCdzYPXD0"
            className="react-player"
            width="65vw"
            height="30vw"
            playing={true}
            controls={false}
            muted={true}
            loop={true}
          />
        </div>
      </div>
      <div className="section-3">
        <h1>Assemblage de jeu</h1>
        <h2>Unity c#</h2>
      </div>
    </div>
  );
}
