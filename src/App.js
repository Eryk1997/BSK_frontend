import React, { useState, Component } from "react";
import "./App.css";
import addQuestion from "./view/AddQuestion/addQuestion";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./navbar/Navbar";
import All from "./view/AllQuestion/All";
import DeleteQuestion from './view/DeleteQuestion/DeleteQuestion'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/addquestion" component={addQuestion} />
          <Route path="/all" component={All} />
          <Route path="/delete" component={DeleteQuestion} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
