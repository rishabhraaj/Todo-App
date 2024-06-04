import React, { useContext, useState } from "react";
import styles from "./InputValues.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

function Item({ item }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.dueDate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${styles.inputBox}`}
            onClick={() => deleteItem(item.name)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
