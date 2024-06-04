import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const EmptyMessage = () => {
  const { items } = useContext(TodoItemsContext);

  return <>{items.length === 0 && <h2>The List is Empty</h2>}</>;
};

export default EmptyMessage;
