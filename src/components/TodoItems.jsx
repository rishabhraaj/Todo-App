import React from "react";
import Item from "./Item";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

function TodoItems() {
  const { items } = useContext(TodoItemsContext);

  return (
    <>
      <div className="container text-center">
        {items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default TodoItems;
