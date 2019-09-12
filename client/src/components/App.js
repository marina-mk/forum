import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

const App = () => (
  <BrowserRouter>
    <div className="container bg-base-color p-0">
      <Header />
      <Content />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
