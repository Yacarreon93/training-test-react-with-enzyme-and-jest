import React from "react";

import api from "./api";

export default class Form extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    optIn: true
  };

  handleChange = str => e => {
    this.setState({ [str]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    api.addUser(
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.optIn
    );
  };

  handlePromotionClick = e => {
    this.setState(prevState => ({ optIn: !prevState.optIn }));
  };

  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>INFO</h2>
        <input
          type="text"
          data-testid="name"
          onChange={this.handleChange("name")}
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          data-testid="email"
          onChange={this.handleChange("email")}
          placeholder="email"
          value={this.state.email}
        />
        <input
          type="text"
          data-testid="phone"
          onChange={this.handleChange("phone")}
          placeholder="phone"
          value={this.state.phone}
        />
        <div>
          <input
            type="checkbox"
            data-testid="optIn"
            onClick={this.handlePromotionClick}
            onChange={this.handlePromotionClick}
            placeholder="optIn"
            checked={this.state.optIn}
          />
          <span data-testid="promotionsP">Receive promotions</span>
        </div>
        <button type="submit" data-testid="submitButton">
          ADD
        </button>
      </form>
    );
  }
}
