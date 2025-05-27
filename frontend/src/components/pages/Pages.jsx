import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Home } from "../home/Home"; 
import { About } from "./About";
import { Readlist } from "./Readlist";
import { Score } from "./Score";
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

const Pages = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/readlist' component={Readlist} />
        <Route exact path='/score' component={Score} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Pages;
