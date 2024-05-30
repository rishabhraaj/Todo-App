import React, { useState } from "react";
import styles from "./InputValues.module.css";
import { MdDeleteForever } from "react-icons/md";

function Item({ item, onDeleteClick }) {
  return (
    <>
      <div className="row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.dueDate}</div>
        <div className="col-2">
          <button
            className={`btn btn-danger ${styles.inputBox}`}
            onClick={() => onDeleteClick(item.name)}
          >
            Delete &nbsp;
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
