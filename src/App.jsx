import React, { Component } from "react";
import ListItem from "./components/ListItem";
import InputHeader from "./components/InputHeader";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };

    this.HandleChange = this.HandleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  HandleChange = (id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  render() {
    return (
      <>
        <h1 className="title">To Do App</h1>
        <main>
          <section>
            <InputHeader addTodo={this.addTodo} />
          </section>

          <section className="list-container">
            {this.state.todoList.length === 0 ? (
              <p className="empty-list-message">Your list is empty</p>
            ) : (
              <ul className="list">
                {this.state.todoList.map((todo) => (
                  <ListItem
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    HandleChange={this.HandleChange}
                    id={todo.id}
                  />
                ))}
              </ul>
            )}
          </section>
        </main>
      </>
    );
  }
}
