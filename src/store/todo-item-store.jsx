import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.dueDate },
    ];
  } else if ((action.type = "DELETE_ITEM")) {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [items, dispatchItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ items, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
