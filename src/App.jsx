import React, { useState } from "react";
import AppHeading from "./components/AppHeading";
import InputValues from "./components/InputValues";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import EmptyMessage from "./components/EmptyMessage";

const App = () => {
  const [items, setItems] = useState([]);

  const handleNewItem = (todoName, dueDate) => {
    const newTodoItems = [...items, { name: todoName, dueDate: dueDate }];
    setItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = items.filter((item) => {
      item.name !== todoItemName;
    });
    setItems(newTodoItem);
  };

  return (
    <>
      <AppHeading />
      <Container>
        <InputValues onNewItem={handleNewItem} />
        <Container>
          <EmptyMessage items={items} />
          <TodoItems items={items} onDeleteClick={handleDeleteItem} />
        </Container>
      </Container>
    </>
  );
};

export default App;
