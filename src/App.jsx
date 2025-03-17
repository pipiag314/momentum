import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateTask from "./pages/CreateTask";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<TaskPage />} />
          <Route path="/createtask" element={<CreateTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
