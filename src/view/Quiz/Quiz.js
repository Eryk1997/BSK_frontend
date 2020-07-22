import React, { Component } from "react";
import axios from "axios";
import Frame from "./Frame";
import losuj from "./Random";

export default class Quiz extends Component {
  state = {
    elements: [],
    test: [],
  };

  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.setElements = this.setElements.bind(this);
  }

  handleData() {

    axios
      .get("http://localhost:3000/quiz")
      .then((res) =>
        this.setState({ elements: res.data }, () => this.setElements())
      )
      .catch((err) => console.log(err));

  }

  componentDidMount() {
    this.handleData();
  }

  setElements() {
    let pom = losuj();
    let elem = pom.map((el) =>
      Frame(
        this.state.elements[el],
        this.state.elements.slice(0, 1).map((el) => el.id_question)
      )
    );
    this.setState({ test: elem });
    
  }


  render() {
    return (
      <div className="bg-dark text-white" style={{height:"100vh"}}>
        <p> Pytanie</p>
        {this.state.elements.slice(0, 1).map((el) => el.text)}
        <p>Odpowiedzi</p>
        {this.state.test}
        <button onClick={this.handleData}>Nowe pytanie</button>
      </div>
    );
  }
}
