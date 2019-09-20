import React from 'react';
import headImage from '../../images/head_img.jpg';
import HeaderLinks from './HeaderLinks';

const Header = () => (
  <>
    <img id="header_image" src={headImage} className="img-fluid" alt="Forum header" />

    <nav className="main navbar navbar-expand-sm bg-base-color navbar-dark sticky-top mx-0 px-3">
      <a className="navbar-brand" href="https://lit-ocean-46169.herokuapp.com">Форум</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <HeaderLinks />
        </ul>
      </div>
    </nav>
  </>
);

export default Header;
