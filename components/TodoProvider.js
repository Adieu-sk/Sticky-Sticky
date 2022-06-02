import { createContext, useState, useContext, useEffect } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(getLocalData());

  const addTodo = (taskContents) =>
    setTodos([
      ...todos,
      {
        taskNumber: v4(),
        taskContents,
        rating: 0,
        color: "",
        progress: false,
        done: false,
      },
    ]);

  const rateTodo = (taskNumber, rating) =>
    setTodos(
      todos.map((todo) =>
        todo.taskNumber === taskNumber ? { ...todo, rating } : todo
      )
    );

  const colorTodo = (taskNumber, color) =>
    setTodos(
      todos.map((todo) =>
        todo.taskNumber === taskNumber ? { ...todo, color } : todo
      )
    );

  const progressTodo = (taskNumber) =>
    setTodos(
      todos.map((todo) =>
        todo.taskNumber === taskNumber
          ? { ...todo, progress: !todo.progress }
          : todo
      )
    );

  const doneTodo = (taskNumber) =>
    setTodos(
      todos.map((todo) =>
        todo.taskNumber === taskNumber
          ? { ...todo, progress: false, done: !todo.done }
          : todo
      )
    );

  const removeTodo = (taskNumber) =>
    setTodos(todos.filter((todo) => todo.taskNumber !== taskNumber));

  useEffect(() => localStorage.setItem("todo", JSON.stringify(todos)));

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        rateTodo,
        colorTodo,
        progressTodo,
        doneTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

const getLocalData = () => {
  if (typeof window !== "undefined") {
    const serializedLocalData = localStorage.getItem("todo");
    const localData = serializedLocalData
      ? JSON.parse(serializedLocalData)
      : [];
    return localData;
  }
};
