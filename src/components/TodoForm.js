import React from "react";


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({ todo: "" });
    this.props.addTask(e, this.state.todo);
  };

  render() {
    console.log("Rendering Form");
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
