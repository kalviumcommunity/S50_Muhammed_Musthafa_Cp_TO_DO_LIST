import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    const completedStyle = {
      textDecoration: "line-through",
      fontStyle: "italic",
      color: "#c0c0c0",
    };

    return (
      <>
        <li className="list-item">
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={() => this.props.HandleChange(this.props.id)}
          />
          <label style={this.props.completed ? completedStyle : null}>
            {this.props.title}
          </label>
        </li>
      </>
    );
  }
}
