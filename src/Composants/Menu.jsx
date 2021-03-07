import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/jeux">
          Jeux
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/graphisme">
          Graphisme
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/web">
          Web
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/audiovisuel">
          Audiovisuel
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);
