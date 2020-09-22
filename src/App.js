import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Skills from './pages/Skills';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/Blog' component={Blog}/>
            <Route path='/Experiences' component={Experiences}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/pricing' component={Pricing}/>
            <Route path='/skills' component={Skills}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
