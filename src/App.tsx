import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const fetchTodos = async () => {
    const { data: items, errors } = await client.models.Todo.list();
    console.log(items);
    console.log(errors);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
