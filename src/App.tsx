import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="flex min-h-screen flex-col items-center justify-center bg-blue-200 font-sans">
        <BackgroundHeading />

        <main className="relative grid h-[636px] w-[972px] grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden rounded-[8px] bg-blue-100 shadow-[0_4px_4px_rgba(0,0,0,0.8)] max-md:h-[336px] max-md:w-[672px]">
          <Header />

          <TodoList />

          <Sidebar />
        </main>
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
