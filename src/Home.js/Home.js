import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [error, setError] = useState("");

  const handleAddToDo = () => {
    if (input === "") {
      setError("* Add some to do into input box *");
      return;
    }

    setError("");

    const item = {
      id: toDoList.length + 1,
      text: input,
      completed: false,
    };

    setToDoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCheck = (id) => {
    setToDoList(
      toDoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((t) => t.id !== id));
  };

  return (
    <div className="maindiv">
      <div className="header">JB's To Do</div>

      <div className="inputdiv">
        <input
          type="text"
          placeholder="enter your to do...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todoinput"
        />
        <button id="addbtn" onClick={() => handleAddToDo()}>
          Add
        </button>
      </div>

      <div>
        {" "}
        {setError && (
          <span style={{ color: "red", fontSize: "10px" }}>{error}</span>
        )}
      </div>

      <div className="todolist">
        <ul>
          {toDoList.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleCheck(t.id)}
              />
              <span className={t.completed ? "strike" : ""}>{t.text}</span>
              <button id="dltbtn" onClick={() => deleteToDo(t.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
