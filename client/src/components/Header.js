import React from "react";
import headImage from "../images/head_img.jpg";

const Header = () => (
  <>
    <img src={headImage} className="img-fluid" alt="Forum header" />

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top mx-0 px-3">
      <a className="navbar-brand" href="https://lit-ocean-46169.herokuapp.com">
        Форум
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://lit-ocean-46169.herokuapp.com"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Вход
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://lit-ocean-46169.herokuapp.com"
              data-toggle="modal"
              data-target="#registrationModal"
            >
              Регистрация
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Header;
