import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
    };
  }

  handleUsernameChange = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  handleCommentsChange = (e) => {
    const value = e.target.value;
    this.setState({
      comments: value,
    });
  };

  handleSelectChange = (e) => {
    const value = e.target.value;
    this.setState({
      topic: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.topic} ${this.state.comments}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleSelectChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
