import React, { useState, useEffect } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am onDelete of todo : ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc, severity, date) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let alertColor;
    console.log(severity);
    if (severity === "Critical") {
      alertColor = "alert animate-bottom alert-danger";
    } else if (severity === "Moderate") {
      alertColor = "alert animate-bottom alert-info";
    } else {
      alertColor = "alert animate-bottom alert-success";
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      date: date,
      alertColor: alertColor,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Router>
        <Header title="My Todo" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exactpath="/about" render={() => {
              return <About />;
            }}
          ></Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
