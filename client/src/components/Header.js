import React from "react";
import headImage from "../images/head_img.jpg";

const Header = () => {
  return (
    <header>
      <img src={headImage} class="img-fluid" />

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="https://lit-ocean-46169.herokuapp.com">
          Форум
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Вход
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Регистрация
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
