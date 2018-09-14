import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Background } from "./views/App.style";
import { Div } from "./views/grid";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error";
import Navigation from "./components/Navigation/Navigation";


class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <Div>
            <Background>  
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route component={Error} />
              </Switch>
          </Background>
        </Div>
      </BrowserRouter>
    );
  }
};

export default App; 