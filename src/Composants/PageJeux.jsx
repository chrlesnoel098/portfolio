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
            playing={false}
            controls={true}
            muted={false}
            loop={true}
          />
        </div>
      </div>
      <div className="section-3">
        <h1>Assemblage de jeu</h1>
        <h2>Unity c#</h2>
        <div className="player-wrapper">
        <div className="texte">
          <h3>Assemblage du jeu Warp Odessey</h3>
          <p>Création de jeu 3D. Expansion de l’univers Warp Odessey dans le cadre du cours d’assemblage de jeu 3D, jeu de type Railroad arcade. <br /><br />
Domaine : Assemblage de jeu. <br /><br />
Technique : Level Design, physique 3D, interactivité C#.</p>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qIjO7g0-mwc&t=60s"
            className="react-player"
            width="35vw"
            height="20vw"
            playing={false}
            controls={true}
            muted={false}
            loop={true}
          />
        </div>
        <div className="player-wrapper">
          <div className="texte">
          <h3>Assemblage du jeu Toxic City</h3>
          <p>*Travail réalisé en équipe avec la collaboration de : 
Antoine L’écuyer, Dalianne Gosselin, Kevin Ponce Mélendez.  <br /><br />
Création de jeu 2D. Dans le cadre du cours projet jeu, jeu de type RPG turnbase pixel art qui se déroule dans l'univers de Toxic City. <br /><br />
Domaine : Assemblage de jeu. <br /><br />
Technique : Level Design, physique 2D, interactivité C#. <br /><br />
Rôle : Gestionnaire de projet, concepteur sonore, programmeur général.</p>
          </div>
        
          <ReactPlayer
            url="https://youtu.be/ut3IahsaD3E"
            className="react-player"
            width="35vw"
            height="20vw"
            playing={false}
            controls={true}
            muted={false}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
