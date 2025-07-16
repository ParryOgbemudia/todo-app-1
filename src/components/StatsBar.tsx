import { useTodoContext } from "../context/TodoProvider";

export default function StatsBar() {
  const { numberOfCompletedTodos, numberOfTodos } = useTodoContext();
  return (
    <p className="flex items-center">
      <strong>{numberOfCompletedTodos}</strong> / {numberOfTodos} todos
      completed
    </p>
  );
}
