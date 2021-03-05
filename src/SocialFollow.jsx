import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import sketchfab from './images/sketchfab.svg';

export default function SocialFollow() {
  return (
   <div class="social-container">
    <a href="https://www.behance.net/CharlesNoelArt/" className="behance social">
  <FontAwesomeIcon icon={faBehance} size="2x" /> 
</a>
 <a href="https://www.linkedin.com/in/charles-no%C3%ABl-74b3b1142"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="https://github.com/chrlesnoel098"
  className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
<a href="https://sketchfab.com/charlesnoel"  className="sketchfab social">
  <img src={sketchfab} alt="githubIcon" />
</a>
</div>
  );
}