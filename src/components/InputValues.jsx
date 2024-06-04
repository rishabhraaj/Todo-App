import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import styles from "./InputValues.module.css";

const InputValues = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleAddButton = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo here"
              ref={todoNameElement}
              className={styles.inputBox}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateElement}
              className={styles.inputBox}
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
