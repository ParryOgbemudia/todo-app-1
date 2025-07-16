import { useTodoContext } from "../context/TodoProvider";
import Button from "./Button";

export default function AddTodoForm() {
  const { setInputTodo, error, inputTodo, addTodo, todos, isAuthenticated } =
    useTodoContext();

  const isLockedOut = !isAuthenticated && todos.length >= 4;

  return (
    <form className="flex flex-col gap-4" onSubmit={addTodo}>
      <h2 className="flex items-center justify-center text-2xl font-medium text-[#231d15]">
        Add a todo
      </h2>
      <input
        value={inputTodo}
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        disabled={isLockedOut}
        className={`my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] px-4 py-6 text-[14px] outline-none ${
          isLockedOut ? "cursor-not-allowed bg-gray-200" : ""
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {isLockedOut && (
        <p className="text-sm text-red-500">
          Please log in to add more than 4 todos.
        </p>
      )}
      <Button type="submit" variant="primary" disabled={isLockedOut}>
        Add to list
      </Button>
    </form>
  );
}
