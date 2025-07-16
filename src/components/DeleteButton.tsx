import { useTodoContext } from "../context/TodoProvider";
import type { DeleteButtonProps } from "../type";

export default function DeleteButton({ id }: DeleteButtonProps) {
  const { deleteTodo } = useTodoContext();

  return <button onClick={() => deleteTodo(id)}>❌</button>;
}
