import React, { useState } from "react";
import swal from "sweetalert";
import "../animate.css";

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [severity, setSeverity] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            swal({
              title: "All fields required",
              text: "Title or Description cannot be blank!",
              icon: "error"
            });
        }else{
            props.addTodo(title, desc, severity, new Date().toLocaleString());
            swal({
              title: "Yayy!",
              text: "Todo added Successfully",
              icon: "success",
            });
            setTitle("");
            setDesc("");
        }
    }


    return (
      <div className="container my-3">
        <h3 className="heading">Add a Todo</h3>
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
              <option selected disabled>Please select</option>
              <option value="Critical">Critical</option>
              <option value="Moderate">Moderate</option>
              <option value="Normal">Normal</option>
            </select>
          </div>

          <button type="submit" className="btn btn-sm btn-success">
            Submit
          </button>
        </form><br />
        <hr />
      </div>
    );
}