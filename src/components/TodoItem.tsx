import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import type { Todo } from "../type";
import DeleteButton from "./DeleteButton";
import EditTodoButton from "./EditTodoButton";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggle, editTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function handleSave() {
    editTodo(todo.id, text);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  return (
    <li className="flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[20px]">
      {isEditing ? (
        <>
          <input
            typeof="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] bg-gray-200 px-4 py-6 text-[20px] outline-none"
          />
          <div className="flex gap-4">
            <button className="size-6" onClick={handleSave}>
              💾
            </button>
            <button className="size-6" onClick={handleCancel}>
              ❌
            </button>
          </div>
        </>
      ) : (
        <>
          {/* ✅ shows the todo text */}
          <span
            onClick={() => toggle(todo.id)}
            className={todo.isCompleted ? "text-[#ccc] line-through" : "text-"}
          >
            {todo.text}
          </span>
          <div className="flex items-center justify-center gap-4">
            <EditTodoButton setIsEditing={setIsEditing} />
            <DeleteButton id={todo.id} />
          </div>
        </>
      )}
    </li>
  );
}
