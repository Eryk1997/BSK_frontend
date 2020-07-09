import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/">
            BSK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a class="nav-link" href="addquestion">
                  Add Question 
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Random Question
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="all">
                  All Question
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="delete">
                  Delete Question
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="quiz">
                  Quiz
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
