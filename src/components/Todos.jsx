import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    const TodosStyle = {
      minHeight: "70vh",
      margin: "40px auto",
    };
    return (
        <div className="container">
            <h3 className="text-center">Todo List</h3>
            <div style={TodosStyle}>
            {props.todos.length === 0? <p className='alert alert-info'>No Todos to Display</p> : 
                props.todos.map((todo)=>{
                    return (
                      <>
                        <TodoItem
                          todo={todo}
                          key={todo.sno}
                          onDelete={props.onDelete}
                          alertColor={todo.alertColor}
                        />
                      {/* <hr/> */}
                      </>
                    ); 
                })
            }

            </div>
        </div>
    )
}
