type EditTodoButtonProps = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditTodoButton({ setIsEditing }: EditTodoButtonProps) {
  return (
    <button
      onClick={() => setIsEditing(true)}
      className="flex size-6 items-center"
    >
      📝
    </button>
  );
}
