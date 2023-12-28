import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>To-Do List</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
