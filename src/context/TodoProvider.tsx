import { createContext, useContext, useEffect, useState } from "react";
import type { Todo, TodoContextType } from "../type";

// Context
const TodoContext = createContext<TodoContextType | null>(null);

// Provider
export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [inputTodo, setInputTodo] = useState("");
  const [error, setError] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //store to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = inputTodo.trim();

    if (trimmed === "") {
      setError("You can't add an empty todo");
      return;
    }

    // if it's authenticated
    if (!isAuthenticated && todos.length >= 4) {
      setError("Login to add more todos");
      return;
    }

    //check for duplicate

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === trimmed.toLowerCase(),
    );

    if (isDuplicate) {
      setError("This todo already exists");
      return;
    }

    // Option A — most recent first
    setTodos((prev) => [
      {
        id: Date.now(),
        text: trimmed,
        isCompleted: false,
      },
      ...prev,
    ]);

    // Option B — alphabetical sort
    /*
    setTodos((prev) => {
      const updated = [
        ...prev,
        {
          id: Date.now(),
          text: trimmed,
          isCompleted: false,
        },
      ];
      return updated.sort((a, b) =>
        a.text.toLowerCase().localeCompare(b.text.toLowerCase())
      );
    });
    */

    setInputTodo("");
    setError("");
  }

  function deleteTodo(id: number) {
    const confirmed = confirm("Are you sure you want to delete this todo?");
    if (!confirmed) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editTodo(id: number, newText: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo,
      ),
    );
  }

  function toggle(id: number) {
    setTodos((prev) =>
      prev.map((t) => {
        return t.id === id ? { ...t, isCompleted: !t.isCompleted } : t;
      }),
    );
  }

  //derived numbers needed.
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted,
  ).length;

  const numberOfTodos = todos.length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        inputTodo,
        setInputTodo,
        error,
        setError,
        addTodo,
        deleteTodo,
        toggle,
        numberOfCompletedTodos,
        numberOfTodos,
        editTodo,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Hook
export function useTodoContext() {
  const value = useContext(TodoContext);
  if (!value)
    throw new Error("useTodoContext must be used inside TodoProvider");
  return value;
}
