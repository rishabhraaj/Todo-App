import AppHeading from "./components/AppHeading";
import InputValues from "./components/InputValues";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import EmptyMessage from "./components/EmptyMessage";
import TodoItemsContextProvider from "./store/todo-item-store";

const App = () => {
  return (
    <>
      <TodoItemsContextProvider>
        <AppHeading />
        <Container>
          <InputValues />
          <Container>
            <EmptyMessage />
            <TodoItems />
          </Container>
        </Container>
      </TodoItemsContextProvider>
    </>
  );
};

export default App;
