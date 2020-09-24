import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Experiences from './pages/Experiences/Experiences';
import Portfolio from './pages/Portfolio/Portfolio';
import Pricing from './pages/Pricing/Pricing';
import Skills from './pages/Skills/Skills';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Footer from "./components/Footer/Footer";
import NoMatch from './pages/NotFound/NoMatch';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Experiences" component={Experiences} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/skills" component={Skills} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
