import { useTodoContext } from "../context/TodoProvider";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, numberOfTodos } = useTodoContext();

  return (
    <>
      {numberOfTodos === 0 ? (
        <p className="flex items-center justify-center text-2xl">
          Start by adding a todo
        </p>
      ) : (
        <ul className="row-start-2">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
}
