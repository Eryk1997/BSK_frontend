import React, { Component } from "react";
import InputFile from "./InputFile";
import testFields from "./testFields";
import axios from "axios";

export default class addQuestion extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleChangeQuestion = (e) => {
    console.log(e.target.value);
    this.setState({ question: e.target.value });
  };

  handleChangeAnswer = (e) => {
    console.log(e.target.value);
    this.setState({ answer: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var data = {
      question: this.state.question,
      answer: this.state.answer,
    };

    if (testFields(this.state.question, this.state.answer)) {
      axios
        .post("http://localhost:3000/questions/", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert("wykonano");
    } else alert("nie wykonano"); 
  };

  render() {
    return (
      <div className="App-header">
        <form onSubmit={this.handleSubmit}>
          <label>
            Pytanie
            <div className="form-group">
              <InputFile id="ques" functionName={this.handleChangeQuestion} />
            </div>
            Odpowiedź
            <div className="form-group">
              <InputFile id="answer" functionName={this.handleChangeAnswer} />
            </div>
          </label>
          <br />
          <button type="submit" className="btn btn-info btn-lg">
            Wyślij
          </button>
        </form>
      </div>
    );
  }
}
