import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      answer: [],
      randomIdQuestion: 1,
    };
    this.handleText = this.handleText.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleClick(e) {
    var data = {
      question: "test2",
    };
    const headers = {
      "Content-Type": "application/json",
    };

    e.preventDefault();
    axios
      .post("http://localhost:3000/questions", data, {
        headers: headers,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleQuestion(e) {
    e.preventDefault();

    axios
      .get("http://localhost:3000/questions/randomId/")
      .then((res) => {
        this.setState({ randomIdQuestion: res.data[0].id_question });
      })
      .catch((err) => console.log(err));
    let pom = this.state.randomIdQuestion;

    axios
      .get("http://localhost:3000/questions/" + pom)
      .then((res) => this.handleText(res))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/answers/" + pom)
      .then((res) => this.handleAnswer(res))
      .catch((err) => console.log(err));
  }

  handleText(res) {
    let question = res.data.text;
    console.log(question);
    this.setState({ text: question });
    document.getElementById("text").innerHTML = question;
  }

  handleAnswer(res) {
    let answer = res.data;
    let lengthAnswer = answer.length;
    this.setState({ answer: answer });
    let pom = "";
    for (let index = 0; index < lengthAnswer; index++) {
      pom += answer[index].answer + "\n";
    }
    document.getElementById("answer").innerHTML = pom;
  }

  render() {
    return (
      <div>
        <nav>
          <header className="App-header">
            Pytanie
            <p id="text"></p>
            Odpowiedź
            <p id="answer"></p>
            <a href="#" onClick={this.handleQuestion}>
              Zmień pytanie
            </a>
          </header>
        </nav>
      </div>
    );
  }
}
