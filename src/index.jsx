import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox'
import './index.scss';
import Appli from './Appli';
import BgAnimation from './BgAnimation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <BgAnimation />
    <SimpleReactLightbox>
      <Appli />
      </SimpleReactLightbox>
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);
