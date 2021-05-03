import React, { useState } from "react";

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [severity, setSeverity] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blanck")
        }else{
            props.addTodo(title, desc, severity, new Date().toLocaleString());
            setTitle("");
            setDesc("");
            setSeverity("");
        }
    }


    return (
      <div className="container my-3">
        <h3 className="text-center">Add a Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title">Todo Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="severity">Severity of the task</label>
            <select className="form-control" name="severity" onChange={(e) => setSeverity(e.target.value)}>
              <option value="" selected disabled>Please select</option>
              <option>Critical</option>
              <option>Moderate</option>
              <option>Normal</option>
            </select>
          </div>

          <button type="submit" className="btn btn-sm btn-success">
            Submit
          </button>
        </form>
      </div>
    );
}