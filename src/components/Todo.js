import React from 'react';

const Todo = props => {
    return (
        <div
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.todo.id)}
        >
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo




