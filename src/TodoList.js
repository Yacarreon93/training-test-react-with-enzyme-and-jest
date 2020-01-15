import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addTodo, removeTodo } from "./store";

export class TodoList extends React.Component {
  state = {
    todo: ""
  };

  addTodo = () => {
    if (this.state.todo) {
      this.props.addTodo({ text: this.state.todo });
      this.setState({ todo: "" });
    }
  };

  removeTodo = id => {
    this.props.removeTodo(id);
  };

  handleInputChange = e => {
    this.setState({
      todo: e.currentTarget.value
    });
  };

  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.todo}
        />
        <button onClick={this.addTodo}>ADD</button>
        <ul>
          {this.props.todos.map(({ text }, id)=> (
            <li key={id} onClick={() => this.removeTodo(id)}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todoList }) => ({
  todos: todoList.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
