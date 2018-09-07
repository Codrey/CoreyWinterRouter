import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Div} from "./views/App.style.js";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </Div>
      </BrowserRouter>
    );
  }
};

export default App; 