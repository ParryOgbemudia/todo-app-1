import { useTodoContext } from "../context/TodoProvider";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { isAuthenticated, setIsAuthenticated } = useTodoContext();
  return (
    <section className="col-[2/3] row-[2/3] flex h-full flex-col justify-between border-l border-black/[0.08] bg-blue-200 px-[25px] max-md:pt-[8px] max-md:pb-[18px]">
      <AddTodoForm />
      <div className="mb-2 flex flex-col gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIsAuthenticated((prev) => !prev)}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
        <Button type="button" variant="secondary">
          Register
        </Button>
      </div>
    </section>
  );
}
