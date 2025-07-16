//Button Type
export type DeleteButtonProps = {
  id: number;
};

// Types
export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  inputTodo: string;
  error: string;
  isAuthenticated: boolean;
  numberOfTodos: number;
  numberOfCompletedTodos: number;

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setInputTodo: React.Dispatch<React.SetStateAction<string>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTodo: (id: number) => void;
  toggle: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
};
