import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({
      type: "[TODO] Delete Todo",
      payload: todoId,
    });
  };

  const handleToggleTodo = (todoId) => {
    //console.log(todoId);
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: todoId,
    });
  };

  return {
    todos,
    handleNewTodo,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
