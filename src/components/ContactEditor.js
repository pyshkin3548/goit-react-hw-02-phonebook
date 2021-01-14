import React, { Component } from 'react';

export default class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            value={name}
            placeholder='Enter a name...'
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <br/>
        <label>
          Number
          <br />
          <input
            type="tel"
            value={number}
            placeholder='Enter a number...'
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
