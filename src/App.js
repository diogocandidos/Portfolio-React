import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Wrapper from "./Components/Wrapper";
import './Styles/Style.css'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
