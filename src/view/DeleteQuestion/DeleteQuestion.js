import React, { Component } from "react";
import axios from 'axios'

export default class DeleteQuestion extends Component {
  state = {
    id: "",
  };
  constructor(props) {
    super(props);

    this.handleId = this.handleId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleId(e) {
    this.setState({ id: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.delete("http://localhost:3000/answers/" + this.state.id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App-header">
        <form onSubmit={this.handleSubmit}>
          <label>
            Id
            <div className="form-group">
              <input
                type="text"
                name="contractType"
                onChange={this.handleId}
              ></input>
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
