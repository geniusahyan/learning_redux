import AdTodo from "./components/AdTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <div className="h-screen w-screen flex flex-col text-center justify-center items-center ">
      <AdTodo />
      <Todos />
    </div>
  )
}

export default App
