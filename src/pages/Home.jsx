import { Link } from "react-router";
import Status from "../components/Status";
import Task from "../components/Task";
import { useEffect } from "react";
import {
  useTasksStore,
  useStatusesStore,
  useDepartmentsStore,
  usePrioritiesStore,
  useEmployeesStore,
  useFilterStore,
} from "../store/store";
import Select from "../components/Select";

const Home = () => {
  const { tasks, filteredTasks, setFilteredTasks, isTasksLoading } = useTasksStore();
  const { statuses, isStatusesLoading } = useStatusesStore();

  const filteredByDepartments = useFilterStore(state => state.filteredByDepartments);
  const filteredByPriorities = useFilterStore(state => state.filteredByPriorities);
  const filteredByEmployees = useFilterStore(state => state.filteredByEmployees);
  

  const filterTasks = () => {
    // initially set this variable to have all the tasks;
    let tasksForFilter = tasks;
    
    
    // filter it by departments 
    if(filteredByDepartments.length > 0) {
      tasksForFilter = tasksForFilter.filter(task => {
        if(filteredByDepartments.map(d => d.id).includes(task.department.id)) {
          return true;
        } else {
          return false;
        }
      })
    }

    
    // filter it by priorities
    if(filteredByPriorities.length > 0) {
      tasksForFilter = tasksForFilter.filter(task => {
        if(filteredByPriorities.map(p => p.id).includes(task.priority.id)) {
          return true;
        } else {
          return false;
        }
      })
    }

    
    // filter it by employees
    if(filteredByEmployees.length > 0) {
      tasksForFilter = tasksForFilter.filter(task => {
        if(filteredByEmployees.map(e => e.id).includes(task.employee.id)) {
          return true;
        } else {
          return false;
        }
      })
    }
    
    
    // setting filtered tasks to the global 'filteredTasks' variable 
    setFilteredTasks(tasksForFilter);
    
  }
  
  

  // filter tasks every time when dependecy array's variables change
  useEffect(() => {
    filterTasks()
  }, [filteredByDepartments, filteredByPriorities, filteredByEmployees])
  
  
  
  return (
    <div className="Home pt-[40px]">
      <h1 className="page-title">დავალებების გვერდი</h1>
      <Select />
      <div className="flex gap-[50px] mt-[60px] justify-center">
        {isStatusesLoading && <div>Loading...</div>}
        {statuses.map((status) => {
          return (
            <Status key={status.id} status={status}>
              {isTasksLoading ? (
                <div>Loading...</div>
              ) : (
                [...filteredTasks].map((task) => {
                  if (task?.status?.id === status.id) {
                    return (
                      <Link key={task.id} to={`/${task.id}`}>
                        <Task task={task} />
                      </Link>
                    );
                  }
                })
              )}
            </Status>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
