import "./App.css";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
