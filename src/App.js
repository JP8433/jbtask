import React, { Component } from "react";
import "./task.css";
class FormParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      city: "",
      users: [],
      search: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      city: this.state.city,
    };
    this.setState({
      users: [...this.state.users, newUser],
      name: "",
      email: "",
      number: "",
      city: "",
    });
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { name, email, number, city, users, search } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="number"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Number"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <button type="submit">Submit</button>
        </form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={this.handleSearch}
        />
        <ul>
          {filteredUsers
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((user, index) => (
              <li key={index}>
                Name: {user.name} | Email: {user.email} | Number: {user.number}{" "}
                | City: {user.city}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default FormParent;
