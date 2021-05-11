import React from 'react';
import '../animate.css'

export const TodoItem = ({todo, onDelete}) => {

    const TodoItemStyle = {
      overflowWrap : "wrap",
      padding : "20px",
      color: "black",
      borderRadius : "9px",
      boxShadow: "5px 5px 8px #888888",
      margin : "25px",
      width:"25%",
    }

    return (
      <div className = {todo.alertColor} style={TodoItemStyle}>
        <h4>
          <b>{todo.title}</b>
        </h4>
        <small>
          <p>Added on {todo.date}</p>
        </small>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    );
}
