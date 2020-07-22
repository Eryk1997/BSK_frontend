import React, { Component } from "react";
import axios from "axios";
import AllQuestion from "./AllQuestion";

export default class All extends Component {
  state = {
    elementsQuestion: [],
    elements: [],
  };

  getQuestion() {
    axios
      .get("http://localhost:3000/qa")
      .then((res) =>
        this.setState(
          {
            elementsQuestion: res.data,
          },
          () => this.setElementsForCurrentPage()
        )
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getQuestion();
  }

  setElementsForCurrentPage() {
    let elements = this.state.elementsQuestion.map((post) => AllQuestion(post));
    this.setState({ elements: elements });
  }

  render() {
    return <div className="bg-dark">{this.state.elements}</div>;
  }
}
