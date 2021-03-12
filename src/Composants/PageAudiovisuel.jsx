import './PageAudiovisuel.scss';
import ReactPlayer from 'react-player';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { NavHashLink } from 'react-router-hash-link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function PageAudiovisuel() {
  return (
    <div className="PageAudiovisuel">
      <h1>Post Production Mix 5.1</h1>
      <h2>Avid pro-tools</h2>
      <div className="section-1">
      <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/CeJmVd2DTXI"
            className="react-player"
            width="30vw"
            height="20vw"
            allow='autoplay; encrypted-media'
            playing={false}
            controls={true}
            muted={false}
            loop={false}
          />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/6LC5fyOUBWQ"
            className="react-player"
            width="30vw"
            height="20vw"
            allow='autoplay; encrypted-media'
            playing={false}
            controls={true}
            muted={false}
            loop={false}
          />
        </div>
      </div>
      <div className="plus">
					<NavHashLink to="/audiovisuel/#tagProjet">
						<ExpandMoreIcon />
					</NavHashLink>
				</div>
      <h1 id="tagProjet">Montage audio/visuel</h1>
      <h2>Adobe After Effects</h2>

      <div className="section-2">
      <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/0zUWLce8B2s"
            className="react-player"
            width="65vw"
						height="30vw"
            allow='autoplay; encrypted-media'
            frameborder="1" 
            playing={false}
            controls={true}
            muted={false}
            loop={false}
          />
        </div>
      </div>
			<div className="top">
				<NavHashLink to="/audiovisuel/#tagTop">
					<ArrowUpwardIcon />
				</NavHashLink>
			</div>
    </div>
  );
}
