import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateTask from "./pages/CreateTask";
import TaskPage from "./pages/TaskPage";
import { useEffect } from "react";
import { useDepartmentsStore, useEmployeesStore, usePrioritiesStore, useStatusesStore, useTasksStore } from "./store/store";

function App() {
  const { tasks, fetchTasks } = useTasksStore();
  const { statuses, isStatusesLoading, fetchStatuses } = useStatusesStore();
  const { departments, fetchDepartments } = useDepartmentsStore();
  const { priorities, fetchPriorities } = usePrioritiesStore();
  const { employees, fetchEmployees } = useEmployeesStore();
  

  useEffect(() => {
    if (tasks.length === 0) {
      //avoiding unnecessary API calls
        fetchTasks();
      }
    if (statuses.length === 0) {
      //avoiding unnecessary API calls
      fetchStatuses();
    }
    if (departments.length === 0) {
      //avoiding unnecessary API calls
      fetchDepartments();
    }
    if (priorities.length === 0) {
      //avoiding unnecessary API calls
      fetchPriorities();
    }
    if (employees.length === 0) {
      //avoiding unnecessary API calls
      fetchEmployees();
    }
  }, []);
  
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
