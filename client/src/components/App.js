import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
