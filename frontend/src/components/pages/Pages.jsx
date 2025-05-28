import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Home } from "../home/Home"; 
import { About } from "./About";
import { Readlist } from "./Readlist";
import { Review} from "./Review";
import { Score } from "./Score";
import { Register } from "./Register";
import { Books } from "./Books";
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

const Pages = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/readlist' component={Readlist} />
        <Route exact path='/review' component={Review} />
        <Route exact path='/score' component={Score} />
        <Route exact path='/register' component={Register} />

      </Switch>
      <Footer />
    </Router>
  );
};

export default Pages;
