import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, logout, register, isAuthenticated, user } = useKindeAuth();

  return (
    <section className="col-[2/3] row-[2/3] flex h-full flex-col justify-between border-l border-black/[0.08] bg-blue-200 px-[25px] max-md:pt-[8px] max-md:pb-[18px]">
      <AddTodoForm />
      {isAuthenticated ? (
        <div className="mb-8 flex flex-col items-center justify-center gap-2">
          <p className="text-sm opacity-50">
            You're logged in as {user?.email}
          </p>
          <Button onClick={logout} type="button" variant="secondary">
            Logout
          </Button>
        </div>
      ) : (
        <div className="mb-2 flex flex-col gap-2">
          <Button type="button" variant="secondary" onClick={login}>
            Login
          </Button>
          <Button onClick={register} type="button" variant="secondary">
            Register
          </Button>
        </div>
      )}
    </section>
  );
}
