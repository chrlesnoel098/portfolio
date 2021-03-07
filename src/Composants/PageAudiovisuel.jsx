import './PageAudiovisuel.scss';
import ReactPlayer from 'react-player';

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
            playing={false}
            controls={true}
            muted={false}
            loop={false}
          />
        </div>
      </div>
      
      <h1>Montage audio/visuel</h1>
      <h2>Adobe After Effects</h2>

      <div className="section-2">
      <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/0zUWLce8B2s"
            className="react-player"
            width="65vw"
						height="30vw"
            playing={false}
            controls={true}
            muted={false}
            loop={false}
          />
        </div>
      </div>

    </div>
  );
}
