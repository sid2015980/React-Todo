import React from "react";
import "./components/Todo.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
  {
    name: "Wash Car",
    id: 564654,
    completed: false,
  },
  {
    name: "Eat",
    id: 123,
    completed: false,
  },
  {
    name: "Sleep",
    id: 154,
    completed: false,
  },
  {
    name: "Take Out Trash",
    id: 485,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  addTask = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleTask = (todoId) => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>TODOS!</h1>
        </div>

        <div className="input">
          <TodoForm addTask={this.addTask} />
        </div>

        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
