import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container bg-base-color p-0">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
