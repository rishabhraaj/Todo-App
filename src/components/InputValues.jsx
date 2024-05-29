import React, { useState } from "react";
import styles from "./InputValues.module.css";

const InputValues = ({ onNewItem }) => {
  let [todoName, setTodoName] = useState("");
  let [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo here"
              className={styles.inputBox}
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className={styles.inputBox}
              value={dueDate}
              onChange={handleDueDate}
            />
          </div>
          <div className="col-2">
            <button
              className={`btn btn-success ${styles.inputBox}`}
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputValues;
