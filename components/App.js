import TodoProvider from "./TodoProvider.js";
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm";

export default function App() {
  return (
    <>
      <TodoProvider>
        <AddTodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}
