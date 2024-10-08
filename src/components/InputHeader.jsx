import React, { Component } from "react";

export default class InputHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.AddItem = this.AddItem.bind(this);
  }

  AddItem = () => {
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="What needs to be done?"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.AddItem();
              }
            }}
          />
          <button onClick={this.AddItem} className="button">
            Add
          </button>
        </div>
      </>
    );
  }
}
