import AddNewTodo from "./components/AddNewTodo";
import CompletedTodos from "./components/CompletedTodos";
import Header from "./components/Header";
import PendingTodos from "./components/PendingTodos";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddNewTodo />

        <div className="row">
          <div className="col-md-6 my-3 my-md-0">
            <PendingTodos />
          </div>
          <div className="col-md-6 my-3 my-md-0">
            <CompletedTodos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
